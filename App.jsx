import React, { useContext } from 'react'

import DocCode from './pages/docCode'
import { routes, RoutingContext } from './Routing'
import './App.css'

function App() {
  const { page } = useContext(RoutingContext)
  const map = Object.keys(routes).reduce((acc, key) => {
  	acc[key.toLowerCase()] = <DocCode src={key}/>
	return acc
  }, {})
  return (
    <>
		{map[page]}
    </>
  )
}

export default App
