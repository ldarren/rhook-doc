import React from 'react'
import ReactDOM from 'react-dom/client'
import 'purecss'
import Router from './Routing'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Router>
			<App/>
		</Router>
	</React.StrictMode>
)

