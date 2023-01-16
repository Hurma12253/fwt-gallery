import { HTMLAttributes } from 'react'

export interface IOption<T = any> {
	value: T
	label: string
}

export interface ISelectProps extends HTMLAttributes<HTMLDivElement> {
	options?: IOption[]
	onValueChange?: (value: IOption['value']) => void
	onClear?: () => void
	placeholder?: string
	isSeparatorOff?: boolean
}
