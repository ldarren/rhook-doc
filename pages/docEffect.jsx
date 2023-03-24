import React, {useState, useRef, useEffect, startTransition} from 'react'
import { createEditor } from '../editor'

const DocEffect = ({src}) => {
	const [script, setScript] = useState('')
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
		import(`${src}?raw`).then(mod => setScript(mod.default))
	}, [src])

	useEffect(() => {
		if (!editor) return
		startTransition(() => {
			editor.run(script)
		})
	}, [script])

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

export default DocEffect
