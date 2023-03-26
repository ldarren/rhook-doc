const n=`import React, {
  useState,
  useEffect,
  useLayoutEffect
} from 'react'

const BlinkyRender = () => {
  const [value, setValue] = useState(0)

  useLayoutEffect(() => {
    if (value !== 0) {
      setValue(0)
    }
  }, [value])

  console.log('render', value)

  return (
    <div onClick={() => setValue(10 + Math.random() * 200)}>
      value: {value}
    </div>
  )
}

<BlinkyRender />
`;export{n as default};
