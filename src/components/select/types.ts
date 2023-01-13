import { HTMLAttributes } from 'react'

export interface IOption {
	value: string
	label: string
}

export interface ISelectProps extends HTMLAttributes<HTMLDivElement> {
	options?: IOption[]
	onValueChange?: (value: IOption['value']) => void
	placeholder?: string
	isSeparatorOff?: boolean
}
