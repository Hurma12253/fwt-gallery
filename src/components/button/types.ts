import { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'icon' | 'pagination'
	additionalVariant?:
		| 'pagination-right'
		| 'pagination-left'
		| 'pagination-current'
		| 'pagination-last'
}
