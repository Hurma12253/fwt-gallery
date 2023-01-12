import React from 'react'
import classNames from 'classnames'
import { IButtonProps } from 'components/button/types'

const Button: React.FC<IButtonProps> = ({
	variant,
	additionalVariant,
	...props
}) => {
	const buttonClasses = classNames(
		'button',
		variant && `button--${variant}`,
		additionalVariant && `button--${additionalVariant}`
	)
	return <button className={buttonClasses} {...props}></button>
}

export default Button
