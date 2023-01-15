import { ICardProps } from 'components/card/types'
import React from 'react'

const Card: React.FC<ICardProps> = ({
	title,
	created,
	author,
	url,
	location,
}) => {
	return (
		<div className="card">
			<div className="card__image-container">
				<img className="card__image" src={url} alt={title} />
			</div>
			<div className="card__info">
				<div className="card__title">{title}</div>
				<div className="card__info-list">
					<div className="card__row">
						<div className="card__parameter">Author:</div>
						<div className="card__value">{author}</div>
					</div>
					<div className="card__row">
						<div className="card__parameter">Created:</div>
						<div className="card__value">{created}</div>
					</div>
					<div className="card__row">
						<div className="card__parameter">Location:</div>
						<div className="card__value">{location}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
