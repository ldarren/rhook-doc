import React, { useContext } from 'react'

import Home from './pages/home'
import DocRef from './pages/docRef'
import DocEffect from './pages/docEffect'
import { routes, RoutingContext } from './Routing'
import './App.css'

function App() {
  const { page } = useContext(RoutingContext)
  return (
    <>
      {(routes.home === page) && <Home />}
      {(routes.docEffect === page) && <DocEffect />}
      {(routes.docRef === page) && <DocRef />}
    </>
  )
}

export default App
