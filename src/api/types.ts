export interface IPainting {
	id: number
	authorId: number
	name: string
	created: string
	imageUrl: string
	locationId: number
}

export interface IAuthor {
	id: number
	name: string
}

export interface ILocation {
	id: number
	location: string
}

export interface IGetPaintingsParams {
	id?: number
	authorId?: number
	locationId?: number
	q?: string
	_page?: number
	_limit?: number
}
