import React, { useContext } from 'react'

import Home from './pages/home'
import DocRef from './pages/docRef'
import DocEffect from './pages/docEffect'
import { routes, RoutingContext } from './Routing'
import './App.css'

function App() {
  const { page } = useContext(RoutingContext)
  const map = {
  	[routes.home]: <Home />,
	[routes.docCallback]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docDeferredValue]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docMemo]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docTransition]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docState]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docReducer]: <DocEffect src="../gist/usereducer.jsx"/>,
	[routes.docEffect]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docLayoutEffect]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docInsertionEffect]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docContext]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docSyncExternalStore]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docRef]: <DocRef />,
	[routes.docImperativeHandle]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docDebugValue]: <DocEffect src="../gist/usecallback.jsx"/>,
	[routes.docId]: <DocEffect src="../gist/usecallback.jsx"/>,
  }
  return (
    <>
		{map[page]}
    </>
  )
}

export default App
