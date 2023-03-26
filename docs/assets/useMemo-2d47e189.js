const e=`import React, { useState, useMemo } from 'react'

function Example() {
  const [number, setNumber] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

  // Expensive computation function
  function computeExpensiveValue(number, multiplier) {
    console.log('Computing expensive value')
    let result = number
    for (let i = 0; i < 99999999; i++) {
      result += number
    }
    return result
  }

  // Use useMemo to memoize the result of the expensive computation
  const expensiveValue = useMemo(() => {
    return computeExpensiveValue(number)
  }, [number])

  return (
    <div>
      <p>Number1: {number}</p>
      <p>Number2: {multiplier}</p>
      <p>Expensive value: {expensiveValue}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number1</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>Increment Number2</button>
    </div>
  )
}

<Example/>
`;export{e as default};
