import { AxiosInstance, AxiosResponse } from 'axios'
import { createAxiosInstance } from 'api/axios'
import { IAuthor, IGetPaintingsParams, ILocation, IPainting } from 'api/types'

export class Api {
	axios: AxiosInstance

	constructor() {
		this.axios = createAxiosInstance()
	}

	getPaintings(
		params?: IGetPaintingsParams
	): Promise<AxiosResponse<IPainting[]>> {
		return this.axios.get('/paintings', {
			params,
		})
	}

	getAuthors(): Promise<AxiosResponse<IAuthor[]>> {
		return this.axios.get('/authors')
	}

	getLocations(): Promise<AxiosResponse<ILocation[]>> {
		return this.axios.get('/locations')
	}
}
