import React, {useState, useRef, useEffect, startTransition} from 'react'
import { create } from '../sandbox'
import SimpleEditor from '../simple_editor'

const DocCode = ({src}) => {
	const [script, setScript] = useState('')
	const previewEl = useRef()
	const [sandbox, setSandbox] = useState(null)

	useEffect(() => {
		const sb = create(previewEl.current, {identifierPrefix: Date.now().toString(36)})
		setSandbox(sb)

		return () => {
			if (!sb) return
			sb.unmount()
		}
	}, [])

	useEffect(() => {
		import(`../gist/${src}.jsx?raw`).then(mod => setScript(mod.default))
	}, [src])

	useEffect(() => {
		if (!sandbox) return
		startTransition(() => {
			sandbox.run(script)
		})
	}, [script])

	const onCodeChange = (value) => {
		setScript(value)
	}

	return (
		<div className="App">
			<div className="panel panel-left code-editor">
				<SimpleEditor code={script} onChange={onCodeChange} />
			</div>
			<div className="panel panel-right preview" ref={previewEl} />
		</div>
	)
}

export default DocCode
