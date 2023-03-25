import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}

<Example/>
