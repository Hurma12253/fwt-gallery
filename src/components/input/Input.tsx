import React from 'react'
import classNames from 'classnames'
import { IInputProps } from 'components/input/types'

const Input: React.FC<IInputProps> = ({
	className,
	type,
	variant,
	onValueChange,
	onChange,
	onKeyDown,
	...props
}) => {
	const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
		event
	) => {
		if (onChange) {
			onChange(event)
		}

		if (onValueChange) {
			const value = event.target.value

			onValueChange(value)
		}
	}

	const inputClasses = classNames(
		'input',
		type === 'date' && 'input--date',
		variant && `input--${variant}`,
		className
	)
	return (
		<input
			onChange={onChangeHandler}
			type={type}
			className={inputClasses}
			{...props}
		/>
	)
}

export default Input
