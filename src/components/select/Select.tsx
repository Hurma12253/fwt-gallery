import React, { useState } from 'react'
import classNames from 'classnames'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import Button from 'components/button'
import { ReactComponent as SelectArrowIcon } from 'assets/svg/select_arrow_down.svg'
import { ReactComponent as CloseIcon } from 'assets/svg/close.svg'
import { IOption, ISelectProps } from 'components/select/types'

const Select: React.FC<ISelectProps> = ({
	options,
	onValueChange,
	placeholder = 'choose one',
	isSeparatorOff,
}) => {
	const [isOpened, setIsOpened] = useState<boolean>(false)
	const [currentOption, setCurrentOption] = useState<IOption>({
		value: '',
		label: placeholder,
	})

	const selectRef = React.createRef<HTMLDivElement>()

	const onSelectClickHandler = () => {
		setIsOpened((prev) => !prev)
	}

	const onSelectClearClickHandler = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.stopPropagation()

		setCurrentOption({
			value: '',
			label: placeholder,
		})
		setIsOpened(false)
	}

	const onSelectPressEnterHandler = () => {
		onSelectClickHandler()
	}

	const onLastOptionBlurHandler = () => {
		setIsOpened(false)
	}

	const onOptionEnterHandler = (value: IOption) => {
		return (event: React.KeyboardEvent<HTMLButtonElement>) => {
			const target = event.target as HTMLButtonElement

			onOptionClickHandler(value)

			target.blur()

			setIsOpened(false)
		}
	}

	const onOptionClickHandler = (value: IOption) => {
		setCurrentOption(value)
		onSelectClickHandler()

		if (onValueChange) {
			onValueChange(value.value)
		}
	}

	const onOutsideClickHandler = () => {
		setIsOpened(false)
	}

	useOnClickOutside(selectRef, onOutsideClickHandler)

	const selectClasses = classNames('select', isOpened && 'select--active')

	const selectButtonClasses = classNames(
		'select__button',
		isOpened && 'select__button--active',
		isSeparatorOff && isOpened && 'select__button--separator-off'
	)

	const selectIconClasses = classNames(
		'select__icon',
		isOpened && 'select__icon--active'
	)

	const dropdownClasses = classNames(
		'select__dropdown',
		isOpened && 'select__dropdown--active'
	)

	return (
		<div className={selectClasses} ref={selectRef} tabIndex={-1}>
			<div className="select__button-container">
				<Button
					variant="primary"
					icons={[
						currentOption.value !== '' && (
							<Button
								onClick={onSelectClearClickHandler}
								variant="icon"
								icons={[<CloseIcon />]}
							/>
						),
						<SelectArrowIcon className={selectIconClasses} />,
					]}
					onClick={onSelectClickHandler}
					onEnterPress={onSelectPressEnterHandler}
					className={selectButtonClasses}
					tabIndex={0}
				>
					{currentOption.label}
				</Button>
			</div>
			<div className={dropdownClasses} tabIndex={-1}>
				{options ? (
					<ul className="select__options" tabIndex={-1}>
						{options?.map((option, i, arr) => {
							return (
								<li
									key={option.value}
									className="select__option"
									tabIndex={-1}
								>
									<Button
										onClick={() =>
											onOptionClickHandler(option)
										}
										className="select__option-button"
										textAlign="left"
										tabIndex={isOpened ? 0 : -1}
										onEnterPress={onOptionEnterHandler(
											option
										)}
										onBlur={
											i === arr.length - 1
												? onLastOptionBlurHandler
												: undefined
										}
									>
										{option.label}
									</Button>
								</li>
							)
						})}
					</ul>
				) : (
					<div className="select__no-options">No options</div>
				)}
			</div>
		</div>
	)
}

export default Select
