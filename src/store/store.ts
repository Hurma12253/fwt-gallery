import GalleryStore from 'store/galleryStore'

export class RootStore {
	galleryStore: GalleryStore

	constructor() {
		this.galleryStore = new GalleryStore()
	}
}
