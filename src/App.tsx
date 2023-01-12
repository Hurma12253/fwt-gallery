import Pagination from 'components/pagination'
import React, { useMemo } from 'react'
import { useState } from 'react'
import './styles/index.scss'

const App: React.FC = () => {
	const pages = useMemo(() => 36, [])
	const [currentPage1, setCurrentPage1] = useState<number>(1)

	const onPageClickHandler1 = (page: number) => {
		setCurrentPage1(page)
	}
	return (
		<div className="app">
			<Pagination
				pages={pages}
				currentPage={currentPage1}
				onPageClick={onPageClickHandler1}
			/>
			<h1>k</h1>
		</div>
	)
}

export default App
