const e=`import React, {useState, useRef} from 'react'

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      style={{ backgroundColor: "red" }}
      {...props}
    />
  )
})

function App() {
  const [value, setValue] = useState("")
  const inputRef = useRef()

  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  )
}

<App/>
`;export{e as default};
