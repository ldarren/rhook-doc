import React, { useContext } from 'react'

import { RoutingContext, routes } from './Routing'

export default function SideMenu() {
  const { page, setPage } = useContext(RoutingContext)

  return (
    <div className="SideMenu">
		{Object.keys(routes).map(key => (
			<a href={`#${routes[key]}`} key={key} onClick={() => setPage(routes[key])} disabled={page===routes[key]}>{key}</a>
		))}
    </div>
  )
}
