import React, {useState, useRef, useEffect, startTransition} from 'react'
import { createEditor } from '../editor'

// default code 
const codeOld = `import React from 'react'

// edit this example

function Greet() {
  return <span>Hello World!</span>
}

<Greet />
`
const code = `import React, {useRef, useState} from 'react'

const Test = () => {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);

	function handleClick() {
		setCount(count + 1);
		countRef.current += 1;
		console.log(\`Count: \${count}, Count ref: \${countRef.current}\`);
	}

	return (
		<div className="App">
			<p>Ref: {count}</p>
			<button onClick={handleClick}>Increment count</button>
		</div>
	);
}
<Test/>
`

const DocRef= () => {
	const [script, setScript] = useState(code)
	const previewEl = useRef()
	const [editor, setEditor] = useState(null)

	useEffect(() => {
		const ed = createEditor(previewEl.current, {identifierPrefix: Date.now().toString(36)})
		setEditor(ed)
		return () => {
			if (!ed) return
			ed.unmount()
		}
	}, [])


	useEffect(() => {
		if (!editor) return
		startTransition(() => {
			editor.run(script)
		})
	}, [editor, script])

	const onCodeChange = ({target: {value}}) => {
		setScript(value)
	}

	return (
		<div className="App">
			<div className="panel panel-left code-editor">
				<textarea cols="2" rows="80" value={script} onChange={onCodeChange} />
			</div>
			<div className="panel panel-right preview" ref={previewEl} />
		</div>
	)
}

export default React.memo(DocRef)

