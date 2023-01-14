import React from 'react'
import classNames from 'classnames'
import { IInputProps } from 'components/input/types'

const Input: React.FC<IInputProps> = ({ className, type, ...props }) => {
	const inputClasses = classNames(
		'input',
		type === 'date' && 'input--date',
		className
	)
	return <input type={type} className={inputClasses} {...props} />
}

export default Input
