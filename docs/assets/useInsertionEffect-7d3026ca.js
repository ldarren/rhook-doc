const e=`import React, { useEffect, useInsertionEffect, useLayoutEffect } from 'react'

const Child = () => {
  useEffect(() => {
    console.log('useEffect child is called')
  }, [])
  useLayoutEffect(() => {
    console.log('useLayoutEffect child is called')
  }, [])
  useInsertionEffect(() => {
    console.log('useInsertionEffect child is called')
  }, [])
}

function App() {
  useEffect(() => {
    console.log('useEffect app is called')
  }, [])
  useLayoutEffect(() => {
    console.log('useLayoutEffect app is called')
  }, [])
  useInsertionEffect(() => {
    console.log('useInsertionEffect app is called')
  }, [])
  return (
    <div className="App">
      <Child />
      <p>Random Text</p>
    </div>
  )
}
<App/>
`;export{e as default};
