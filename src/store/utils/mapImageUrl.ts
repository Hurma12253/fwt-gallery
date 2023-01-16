import { IPainting } from 'api/types'
import { apiUrl } from 'api/constants'

export const mapImageUrl = (paintings: IPainting[]) => {
	return paintings.map((painting) => ({
		...painting,
		imageUrl: apiUrl + painting.imageUrl,
	}))
}
