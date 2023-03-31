const n=`import React, { useState } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
  	// ** this is similar to setCount(count + 1)
    setCount(old => old + 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

<Example/>
`;export{n as default};
