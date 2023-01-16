import axios, { AxiosRequestConfig } from 'axios'
import { apiUrl } from 'api/constants'

export const createAxiosInstance = () => {
	const config: AxiosRequestConfig = {
		baseURL: apiUrl,
	}

	return axios.create(config)
}
