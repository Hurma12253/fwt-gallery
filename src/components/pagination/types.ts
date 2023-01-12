import { HTMLAttributes } from 'react'

export interface IPaginationProps extends HTMLAttributes<HTMLDivElement> {
	currentPage: number
	pages: number
	onPageClick?: (page: number) => void
    disabled?: boolean
}
