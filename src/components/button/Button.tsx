import React from 'react'
import classNames from 'classnames'
import { IButtonProps } from 'components/button/types'

const Button: React.FC<IButtonProps> = ({
	variant,
	additionalVariant,
	icons,
	children,
	className,
	textAlign = 'center',
	onEnterPress,
	...props
}) => {
	const buttonClasses = classNames(
		'button',
		variant && `button--${variant}`,
		additionalVariant && `button--${additionalVariant}`,
		icons && 'button--with-icon',
		className
	)

	const buttonContentClasses = classNames(
		'button__content',
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
			<div className="button__icons-container">
				{icons?.map((icon, i) => (
					<div key={i} className="button__icon">
						{icon}
					</div>
				))}
			</div>
		</button>
	)
}

export default Button
