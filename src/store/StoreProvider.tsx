import React, { ReactNode } from 'react'
import { RootStore } from 'store/store'

export const StoreContext = React.createContext<RootStore>({} as RootStore)

const StoreProvider: React.FC<{
	store: RootStore
	children?: ReactNode
}> = ({ store, children }) => {
	return (
		<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
	)
}

export default StoreProvider
