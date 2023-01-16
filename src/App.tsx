import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Card from 'components/card'
import DatePicker from 'components/date-picker'
import Pagination from 'components/pagination'
import Select from 'components/select'
import Header from 'components/header'
import Input from 'components/input'
import Loader from 'components/loader'
import { useStore } from 'hooks/useStore'
import { debounce } from 'utils/debounce'
import './styles/index.scss'

const App: React.FC = () => {
	const { galleryStore } = useStore()

	const onQueryChangeHandler = debounce<(value: string) => void>((value) => {
		galleryStore.fetchByQuery(value)
	}, 1000)

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
	const onLocationClearHandler = () => {
		galleryStore.clearLocation()
	}

	useEffect(() => {
		galleryStore.initialFetch()
	}, [galleryStore])

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
					children={galleryStore.isLoading && <Loader />}
				/>
				<Select
					placeholder="Location"
					options={galleryStore.locations.map(({ location, id }) => ({
						value: id,
						label: location,
					}))}
					onValueChange={onLocationChangeHandler}
					onClear={onLocationClearHandler}
					children={galleryStore.isLoading && <Loader />}
				/>
				<DatePicker className="control" />
			</div>
			{!galleryStore.isLoading && galleryStore.paintings.length <= 0 && (
				<h5 className='no-paintings'>No paintings.</h5>
			)}
			<div className="card-container">
				{galleryStore.isLoading ? (
					<Loader />
				) : (
					galleryStore.paintings.map((data, i) => {
						return (
							<Card
								key={data.id}
								title={data.name}
								author={
									galleryStore.findAuthor(data.authorId)
										?.name || 'Not found'
								}
								created={data.created}
								location={
									galleryStore.findLocation(data.locationId)
										?.location || 'Not found'
								}
								url={data.imageUrl}
							/>
						)
					})
				)}
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
