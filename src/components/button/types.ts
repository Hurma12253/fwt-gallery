import React, { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'pagination' | 'primary' | 'icon'
	additionalVariant?:
		| 'pagination-right'
		| 'pagination-left'
		| 'pagination-current'
		| 'pagination-last'
	icons?: ReactNode[]
	textAlign?: 'left' | 'center'
	onEnterPress?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
	ref?: React.RefObject<HTMLButtonElement>
}
