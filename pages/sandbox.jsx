import React, * as hooks from 'react'
import ReactDOM from 'react-dom/client'
import * as Acorn from 'acorn'
import { generate } from 'escodegen'
import { transform } from '@babel/standalone'

const acornOptions = {
	ecmaVersion: 'latest',
	sourceType: 'module'
}

function isReactNode(node) {
    const callee = node?.expression?.callee
	if (!callee) return false
    if ('createElement' !== callee?.property?.name) return false
    return ('default' === callee?.object?.property?.name || '_react' === callee?.object?.object?.name)
}

export function findReactNode(ast) {
    return ast.body.findLast(isReactNode)
}

function parse(code) {
	const tcode = transform(code, { presets: ['es2015', 'react'] }).code
	return Acorn.parse(tcode, acornOptions)
}

function compile(code, render) {
	try {
		// 1. transform code
		// 2. get AST
		const ast = parse(code)

		// 3. find React.createElement expression in the body of program
		const rnode = findReactNode(ast)

		if (rnode) {
			const nodeIndex = ast.body.indexOf(rnode)
			// 4. convert the React.createElement invocation to source and remove the trailing semicolon
			const retJsx = generate(rnode).slice(0, -1)
			// 5. transform React.createElement(...) to render(React.createElement(...)), 
			// where render is a callback passed from outside
			const renderCallAst = parse(`render(${retJsx})`).body

			ast.body[nodeIndex] = renderCallAst[renderCallAst.length-1]
		}

		// 6. create a new wrapper function with all dependency as parameters
		return new Function('render', 'require', generate(ast))
	} catch (ex) {
		// in case of exception render the exception message
		render(<><h3>Syntax Error</h3><pre style={{ color: 'red' }}>{ex.message}</pre></>)
	}
}

export function create(el, moduleResolver) {
	const root = ReactDOM.createRoot(el)
	window.onerror = (evt, source, lineno, colno, err) => {
		render(<><h3>Runtime Error</h3><pre style={{ color: 'red' }}>{`${evt}\n${err.message} [${lineno}:${colno}]\n${err.stack}`}</pre></>)
		return true
	}

    function render(node) {
		root.render(node)
    }

    function require(moduleName) {
		switch(moduleName){
		case 'react':
			return {
				__esModule : true,
				default: React,
				...hooks
			}
		default:
			if (moduleResolver) return moduleResolver(moduleName)
			break
		}
    }

    return {
        // returns transpiled code in a wrapper function which can be invoked later
        compile(code) {
            return compile(code, render)
        },

        // compiles and invokes the wrapper function
        run(code) {
			try {
            	const func = this.compile(code)
				if (func) func(render, require)
			}catch(ex){
            	render(<><h3>Compile Error</h3><pre style={{ color: 'red' }}>{ex.message}</pre></>)
			}
        },

        // just compiles and returns the stringified wrapper function
        toString(code) {
            return compile(code).toString()
        },

		unmount() {
			// prevent: Attempted to synchronously unmount a root while React was already rendering.
			requestAnimationFrame(() => {
				root.unmount()
			})
		}
    }
}
