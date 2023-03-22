import React, {
	useCallback,
	useContext,
	useDebugValue,
	useDeferredValue,
	useEffect,
	useId,
	useImperativeHandle,
	useInsertionEffect,
	useLayoutEffect,
	useMemo,
	useReducer,
	useRef,
	useState,
	useSyncExternalStore,
	useTransition,
} from 'react'
import ReactDOM from 'react-dom/client'
import * as Acorn from 'acorn'
import { generate as generateJs } from 'escodegen'
import { transform as babelTransform } from '@babel/standalone'

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

export function createEditor(domElement, moduleResolver) {
	const root = ReactDOM.createRoot(domElement)
    function render(node) {
		root.render(node)
    }

    function require(moduleName) {
		if (moduleResolver) return  moduleResolver(moduleName)
		switch(moduleName){
		case 'react':
			return {
				__esModule : true,
				default: React,
				useCallback,
				useContext,
				useDebugValue,
				useDeferredValue,
				useEffect,
				useId,
				useImperativeHandle,
				useInsertionEffect,
				useLayoutEffect,
				useMemo,
				useReducer,
				useRef,
				useState,
				useSyncExternalStore,
				useTransition,
			}
		}
    }

	function parse(code) {
		const tcode = babelTransform(code, { presets: ['es2015', 'react'] }).code
		return Acorn.parse(tcode, acornOptions)
	}

    function getWrapperFunction(code) {
        try {
            // 1. transform code
            // 2. get AST
            const ast = parse(code)

            // 3. find React.createElement expression in the body of program
            const rnode = findReactNode(ast)

            if (rnode) {
                const nodeIndex = ast.body.indexOf(rnode)
                // 4. convert the React.createElement invocation to source and remove the trailing semicolon
                const createElSrc = generateJs(rnode).slice(0, -1)
                // 5. transform React.createElement(...) to render(React.createElement(...)), 
                // where render is a callback passed from outside
                const elCode = `try{ render(${createElSrc}) }catch(ex){ render(ex.message) }`
                const renderCallAst = parse(elCode).body

                ast.body[nodeIndex] = renderCallAst[renderCallAst.length-1]
            }

            // 6. create a new wrapper function with all dependency as parameters
            return new Function('render', 'require', generateJs(ast))
        } catch (ex) {
            // in case of exception render the exception message
            render(<><h3>Syntax Error</h3><pre style={{ color: 'red' }}>{ex.message}</pre></>)
        }
    }

    return {
        // returns transpiled code in a wrapper function which can be invoked later
        compile(code) {
            return getWrapperFunction(code)
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
        getCompiledCode(code) {
            return getWrapperFunction(code).toString()
        }
    }
}
