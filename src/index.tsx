import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import StoreProvider from 'store/StoreProvider'
import { RootStore } from 'store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const store = new RootStore()

root.render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<App />
		</StoreProvider>
	</React.StrictMode>
)

reportWebVitals()
