import { makeAutoObservable } from 'mobx'

export class GalleryStore {
	name: string

	constructor() {
		makeAutoObservable(this)

		this.name = 'default'
	}

	setName(name: string) {
		this.name = name
	}

	getName() {
		return this.name
	}
}
