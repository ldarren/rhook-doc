import React, { useState, useMemo, createContext } from 'react'
import SideMenu from './SideMenu'

/**
 * Simple object which we use to set and
 * identify the pages in our router
 */
export const routes = {
	home: 'home',
	docCallback: 'doccallback',
	docDeferredValue: 'docdeferredvalue',
	docMemo: 'docmemo',
	docTransition: 'doctransition',
	docState: 'docstate',
	docReducer: 'docreducer',
	docEffect: 'doceffect',
	docLayoutEffect: 'uselayouteffect',
	docInsertionEffect: 'docinsertioneffect',
	docContext: 'usecontext',
	docSyncExternalStore: 'docsyncexternalstore',
	docRef: 'docref',
	docImperativeHandle: 'docimperativehandle',
	docDebugValue: 'docdebugvalue)',
	docId: 'docid',
}

export const RoutingContext = createContext({ page: routes.home })

export default function Router({ children }) {
	/* Read the urlPath, e.g. '/about' or '/' */
	let urlPath = window.location.hash.slice(1).toLowerCase()

	/* Set the default page to Home if not specified otherwise in the URL */
	const [page, setPage] = useState(urlPath || routes.home)

	const value = useMemo(() => ({
		page,
		setPage
	}), [page, setPage])

	return (
		<RoutingContext.Provider value={value}>
		<SideMenu />
		{children}
		</RoutingContext.Provider>
	)
}

