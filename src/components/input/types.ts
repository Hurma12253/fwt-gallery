import { InputHTMLAttributes } from 'react'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	variant?: 'primary'
	onValueChange?: (value: string) => void
}
