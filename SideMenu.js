import React, { useContext } from 'react'

import { RoutingContext, routes } from './Routing'

export default function SideMenu() {
  const { page, setPage } = useContext(RoutingContext)

  return (
    <div className="SideMenu">
		<a href="#home" onClick={() => setPage(routes.home)} disabled={page==='home'}>Home</a>
		<a href="#docEffect" onClick={() => setPage(routes.docEffect)} disabled={page==='doceffect'}>useEffect</a>
		<a href="#docRef" onClick={() => setPage(routes.docRef)} disabled={page==='docref'}>useRef</a>
    </div>
  )
}
