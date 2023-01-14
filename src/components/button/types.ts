import React, { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'pagination' | 'primary' | 'icon'
	additionalVariant?:
		| 'pagination-right'
		| 'pagination-left'
		| 'pagination-current'
		| 'pagination-last'
	textAlign?: 'left' | 'center'
	onEnterPress?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
	overflow?: 'hidden'
}
