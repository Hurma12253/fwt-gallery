import React from 'react'
import classNames from 'classnames'
import { IButtonProps } from 'components/button/types'

const Button: React.FC<IButtonProps> = ({
	variant,
	additionalVariant,
	children,
	className,
	textAlign = 'center',
	onEnterPress,
	overflow,
	...props
}) => {
	const buttonClasses = classNames(
		'button',
		variant && `button--${variant}`,
		additionalVariant && `button--${additionalVariant}`,
		className
	)

	const buttonContentClasses = classNames(
		'button__content',
		overflow === 'hidden' && 'button__content--overflow-hidden',
		textAlign !== 'center' && `button__text-align--${textAlign}`
	)

	const onKeyDownHandler = (
		event: React.KeyboardEvent<HTMLButtonElement>
	) => {
		if (event.key === 'Enter') {
			if (onEnterPress) {
				event.preventDefault()

				onEnterPress(event)
			}
		}
	}

	return (
		<button
			className={buttonClasses}
			onKeyDown={onKeyDownHandler}
			{...props}
		>
			<div className={buttonContentClasses}>{children}</div>
		</button>
	)
}

export default Button
