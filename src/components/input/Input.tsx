import React from 'react'
import classNames from 'classnames'
import { IInputProps } from 'components/input/types'

const Input: React.FC<IInputProps> = ({
	className,
	type,
	variant,
	...props
}) => {
	const inputClasses = classNames(
		'input',
		type === 'date' && 'input--date',
		variant && `input--${variant}`,
		className
	)
	return <input type={type} className={inputClasses} {...props} />
}

export default Input
