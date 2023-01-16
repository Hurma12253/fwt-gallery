import { makeAutoObservable, runInAction } from 'mobx'
import api from 'api'
import { mapImageUrl } from 'store/utils/mapImageUrl'
import { IAuthor, IGetPaintingsParams, ILocation, IPainting } from 'api/types'

export class GalleryStore {
	paintings: IPainting[]
	authors: IAuthor[]
	locations: ILocation[]
	isLoading: boolean
	error: string | null
	currentPage: number
	currentLocation: ILocation | null
	currentAuthor: IAuthor | null
	currentQuery: string | null
	pages: number
	cardsOnPage: number

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })

		this.paintings = []
		this.authors = []
		this.locations = []
		this.isLoading = false
		this.error = null
		this.currentPage = 1
		this.currentAuthor = null
		this.currentLocation = null
		this.currentQuery = null
		this.pages = 1000
		this.cardsOnPage = 12
	}

	async initialFetch(): Promise<void> {
		try {
			runInAction(() => {
				this.isLoading = true
			})

			const { data: authors } = await api.getAuthors()
			const { data: locations } = await api.getLocations()
			await this.fetchPaintings()

			runInAction(() => {
				this.authors = authors
				this.locations = locations
				this.isLoading = false
			})
		} catch (error) {
			runInAction(() => {
				this.error = String(error)
			})
		}
	}

	async fetchPaintings(params?: IGetPaintingsParams): Promise<void> {
		try {
			runInAction(() => {
				this.isLoading = true
			})

			const defaultParams: IGetPaintingsParams = {
				_limit: this.cardsOnPage,
				_page: this.currentPage,
				authorId: this.currentAuthor?.id || undefined,
				locationId: this.currentLocation?.id || undefined,
				q: this.currentQuery || undefined,
			}

			const { data } = await api.getPaintings({
				...defaultParams,
				...params,
			})

			runInAction(() => {
				this.paintings = mapImageUrl(data)
				this.isLoading = false

				if (params) {
					if (params.authorId) {
						this.currentAuthor =
							this.findAuthor(params.authorId) || null
					}
					if (params.locationId) {
						this.currentLocation =
							this.findLocation(params.locationId) || null
					}
					if (params.q) {
						this.currentQuery = params.q
					} else {
						this.currentQuery = null
					}
				}
			})
		} catch (error) {
			runInAction(() => {
				this.error = String(error)
			})
		}
	}

	fetchByAuthor(authorId: number) {
		this.setCurrentPage(1)
		this.fetchPaintings({ authorId })
	}

	fetchByLocation(locationId: number) {
		this.setCurrentPage(1)
		this.fetchPaintings({ locationId })
	}

	fetchByQuery(query: string) {
		this.setCurrentPage(1)

		if (!query) {
			this.currentQuery = null
			this.fetchPaintings()

			return
		}

		this.fetchPaintings({ q: query })
	}

	findAuthor(authorId: number): IAuthor | undefined {
		return this.authors.find((author) => author.id === authorId)
	}

	findLocation(locationId: number): ILocation | undefined {
		return this.locations.find((location) => location.id === locationId)
	}

	async changePage(page: number): Promise<void> {
		runInAction(() => {
			this.setCurrentPage(page)
		})

		await this.fetchPaintings({
			_page: page,
		})

		runInAction(() => {
			this.currentPage = page
		})
	}

	async clearAuthor() {
		try {
			runInAction(() => {
				this.currentAuthor = null
			})

			this.fetchPaintings()
		} catch (error) {
			runInAction(() => {
				this.error = String(error)
			})
		}
	}

	async clearLocation() {
		try {
			runInAction(() => {
				this.currentLocation = null
			})

			this.fetchPaintings()
		} catch (error) {
			runInAction(() => {
				this.error = String(error)
			})
		}
	}

	setCurrentPage(page: number) {
		runInAction(() => {
			this.currentPage = page
		})
	}
}
