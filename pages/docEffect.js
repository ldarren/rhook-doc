import React from 'react'
import { createEditor } from '../editor'

// default code 
const code = `import React from 'react'

// edit this example

function Greet() {
  return <span>Hello World!</span>
}

<Greet />
`


class DocEffect extends React.Component {
  state = {
    code
  }

  editor = null

  el = null

  componentDidMount() {
    this.editor = createEditor(this.el)
    this.editor.run(code)
  }

  onCodeChange = ({ target: { value } }) => {
    this.setState({ code: value })
    this.rundebounce()
  }

  rundebounce = () => {
    const { code } = this.state
    this.editor.run(code)
  }//, 500)

  render() {
    const { code } = this.state
    return (
      <div className="App">
	  <div className="panel panel-left code-editor">
		<textarea cols="2" rows="80" value={code} onChange={this.onCodeChange} />
	  </div>
	  <div className="panel panel-right preview" ref={el => (this.el = el)} />
      </div>
    )
  }
}

export default DocEffect
