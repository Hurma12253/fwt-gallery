import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import Card from 'components/card'
import DatePicker from 'components/date-picker'
import Pagination from 'components/pagination'
import Select from 'components/select'
import Header from 'components/header'
import Input from 'components/input'
import './styles/index.scss'
import { useStore } from 'hooks/useStore'
import useDebounce from 'hooks/useDebounce'

const App: React.FC = () => {
	const { galleryStore } = useStore()
	const [queryValue, setQueryValue] = useState<string>('')
	const deboucedQueryValue = useDebounce(queryValue, 1000)

	const onPageChangeHandler = (page: number) => {
		galleryStore.changePage(page)
	}

	const onAuthorChangeHandler = (authorId: number) => {
		galleryStore.fetchByAuthor(authorId)
	}

	const onAuthorClearHandler = () => {
		galleryStore.clearAuthor()
	}

	const onLocationChangeHandler = (locationId: number) => {
		galleryStore.fetchByLocation(locationId)
	}
	const onLocationClearHadnler = () => {
		galleryStore.clearLocation()
	}

	const onQueryChangeHandler = (value: string) => {
		setQueryValue(value)
	}

	useEffect(() => {
		galleryStore.initialFetch()
	}, [galleryStore])

	useEffect(() => {
		galleryStore.fetchByQuery(deboucedQueryValue)
	}, [galleryStore, deboucedQueryValue])

	return (
		<div className="container">
			<Header />
			<div className="controls">
				<Input
					variant="primary"
					placeholder="Name"
					onValueChange={onQueryChangeHandler}
				/>
				<Select
					placeholder="Author"
					options={galleryStore.authors.map(({ id, name }) => ({
						value: id,
						label: name,
					}))}
					onValueChange={onAuthorChangeHandler}
					onClear={onAuthorClearHandler}
				/>
				<Select
					placeholder="Location"
					options={galleryStore.locations.map(({ location, id }) => ({
						value: id,
						label: location,
					}))}
					onValueChange={onLocationChangeHandler}
					onClear={onLocationClearHadnler}
				/>
				<DatePicker className="control" />
			</div>
			<div className="card-container">
				{galleryStore.paintings.map((data, i) => {
					return (
						<Card
							key={data.id}
							title={data.name}
							author={
								galleryStore.findAuthor(data.authorId)?.name ||
								'Not found'
							}
							created={data.created}
							location={
								galleryStore.findLocation(data.locationId)
									?.location || 'Not found'
							}
							url={data.imageUrl}
						/>
					)
				})}
			</div>
			<Pagination
				onPageClick={onPageChangeHandler}
				currentPage={galleryStore.currentPage}
				pages={galleryStore.pages}
				disabled={galleryStore.isLoading}
			/>
		</div>
	)
}

export default observer(App)
