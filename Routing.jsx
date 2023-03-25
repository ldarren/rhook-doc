import React, { useState, useMemo, createContext } from 'react'
import SideMenu from './SideMenu'

/**
 * Simple object which we use to set and
 * identify the pages in our router
 */
export const routes = {
	home: 'home',
	useCallback: 'usecallback',
	useDeferredValue: 'usedeferredvalue',
	useMemo: 'usememo',
	useTransition: 'usetransition',
	useState: 'usestate',
	useReducer: 'usereducer',
	useEffect: 'useeffect',
	useLayoutEffect: 'uselayouteffect',
	useInsertionEffect: 'useinsertioneffect',
	useContext: 'usecontext',
	useSyncExternalStore: 'usesyncexternalstore',
	useRef: 'useref',
	useImperativeHandle: 'useimperativehandle',
	useDebugValue: 'usedebugvalue',
	useId: 'useid',
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

