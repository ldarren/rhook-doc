import React, { useContext } from 'react'

import Home from './pages/home'
import DocCode from './pages/docCode'
import { routes, RoutingContext } from './Routing'
import './App.css'

function App() {
  const { page } = useContext(RoutingContext)
  const map = {
  	[routes.home]: <Home />,
	[routes.docCallback]: <DocCode src="usecallback"/>,
	[routes.docDeferredValue]: <DocCode src="usecallback"/>,
	[routes.docMemo]: <DocCode src="usecallback"/>,
	[routes.docTransition]: <DocCode src="usecallback"/>,
	[routes.docState]: <DocCode src="usecallback"/>,
	[routes.docReducer]: <DocCode src="usereducer"/>,
	[routes.docEffect]: <DocCode src="usecallback"/>,
	[routes.docLayoutEffect]: <DocCode src="usecallback"/>,
	[routes.docInsertionEffect]: <DocCode src="usecallback"/>,
	[routes.docContext]: <DocCode src="usecallback"/>,
	[routes.docSyncExternalStore]: <DocCode src="usecallback"/>,
	[routes.docRef]: <DocCode src="useref"/>,
	[routes.docImperativeHandle]: <DocCode src="usecallback"/>,
	[routes.docDebugValue]: <DocCode src="usecallback"/>,
	[routes.docId]: <DocCode src="usecallback"/>,
  }
  return (
    <>
		{map[page]}
    </>
  )
}

export default App
