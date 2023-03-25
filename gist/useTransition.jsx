import React, {useState, useTransition} from 'react'
function App() {
  const [name, setName] = useState("")
  const [all] = useState(new Array(9999).fill(Date.now().toString(36)))
  const [list, setList] = useState([])
  const [isPending, startTransition] = useTransition()

  function handleChange(e) {
	const val = e.target.value
	setName(val)
	startTransition(() => {
		if (!val) return setList([])
		setList(all.filter(item => item.includes(val)))
	})
  }

  return <>
    <input type="text" value={name} onChange={handleChange} />
    {isPending ? ( <div>Loading...</div>) : (
	list.length ? <ul> {list.map(item => <li>{item}</li>)} </ul> : <div>Not found: {name}</div>
    )}
  </>
}

<App/>
