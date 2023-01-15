import React from 'react'
import { observer } from 'mobx-react-lite'
import Card from 'components/card'
import DatePicker from 'components/date-picker'
import Pagination from 'components/pagination'
import Select from 'components/select'
import Header from 'components/header'
import Input from 'components/input'
import './styles/index.scss'
import { useStore } from 'hooks/useStore'

const data = Array(12)
	.fill('')
	.map(() => ({
		url: 'https://sun9-40.userapi.com/impg/_eFXzD61an_Yer9aPB4quVR9gilN1BCks9W2Iw/X7mVRoeIHGY.jpg?size=1024x1024&quality=95&sign=489f8eb54e33ac7491255e823460a632&type=album',
		title: 'The Night Watch',
		created: '1642',
		location: 'The Rijksmuseum',
		author: 'Rembrandt',
	}))

const currentPage = 1
const pages = 12

const App: React.FC = () => {
	const { galleryStore } = useStore()

	return (
		<div className="container">
			<Header />
			<div className="controls">
				<Input variant="primary" placeholder="Name" />
				<Select placeholder="Author" />
				<Select placeholder="Location" />
				<DatePicker className="control" />
			</div>
			<div className="card-container">
				{data.map((props, i) => {
					return <Card key={i + props.title} {...props} />
				})}
			</div>
			<button onClick={() => galleryStore.setName('vasya nahui')}>
				click
			</button>
			<button onClick={() => galleryStore.getName()}>click</button>
			<Pagination currentPage={currentPage} pages={pages} />
		</div>
	)
}

export default observer(App)
