const e=`import React, { useState, useMemo, useDeferredValue } from 'react'

function App() {
  const [name, setName] = useState('')
  const deferredName = useDeferredValue(name)

  const LIST_SIZE= 10000

  const list = useMemo(() => {
    const dataList = []
    for (let i= 0; i < LIST_SIZE; i++) {
      dataList.push(deferredName)
    }
    return dataList
  }, [deferredName]) // <<<-- change this to name to see the difference

  const handleChange = (e) => {
    const { value } = e.target
    setName(value)
  }

  return (
    <div>
      <input type='text' value={name} onChange={handleChange} />
      <p>
        {list.map((item) => {
          return <p>{item}</p>
        })}
      </p>
    </div>
  )
}

<App/>
`;export{e as default};
