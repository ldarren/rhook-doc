import React, {useState, useRef, useImperativeHandle} from 'react' 


const CustomModal = React.forwardRef(({ open, onClose }, ref)  => {
  const closeRef = useRef()
  const confirmRef = useRef()
  const denyRef = useRef()

  useImperativeHandle(ref, () => {
    return {
      closeBtn: closeRef.current,
      confirmBtn: confirmRef.current,
      denyBtn: denyRef.current
    }
  })

  if (!open) return null

  return (
    <div>
      <button onClick={onClose}>&times;</button>
      <h1>Title</h1>
      <div>
	  	<input ref={closeRef} placeholder="input1"></input>
	  	<input ref={confirmRef} placeholder="input2"></input>
	  	<input ref={denyRef} placeholder="input3"></input>
      </div>
    </div>
  )
})

function App() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef()

  return (
    <>
    <button onClick={() => setOpen(true)}>Open</button>
    <button onClick={() => modalRef.current.closeBtn.focus()}>Focus input1</button>
    <button onClick={() => modalRef.current.confirmBtn.focus()}>Focus input2</button>
    <button onClick={() => modalRef.current.denyBtn.focus()}>Focus input3</button>
      <CustomModal
        ref={modalRef}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

<App/>
