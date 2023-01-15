import React, { useState } from 'react'
import Select from 'components/select'
import Input from 'components/input'
import { ReactComponent as DashIcon } from 'assets/svg/dash.svg'
import {
	IDatePickerProps,
	IDatePickerValue,
} from 'components/date-picker/types'

const DatePicker: React.FC<IDatePickerProps> = ({ onDateChange, ...props }) => {
	const [value, setValue] = useState<IDatePickerValue>({
		from: '',
		before: '',
	})

	const onDateChangeHandler = (value: IDatePickerValue) => {
		if (onDateChange) {
			onDateChange(value)
		}
	}

	const onFromChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
		event
	) => {
		const newValue = { ...value, from: event.target.value }

		setValue(newValue)
		onDateChangeHandler(newValue)
	}

	const onBeforeChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
		event
	) => {
		const newValue = { ...value, before: event.target.value }

		setValue(newValue)
		onDateChangeHandler(newValue)
	}

	return (
		<Select placeholder="Created" isSeparatorOff {...props}>
			<div className="date-picker__container">
				<Input
					onChange={onFromChangeHandler}
					placeholder="from"
					type="date"
					className="date-picker__input"
				/>
				<div className="date-picker__icon-container">
					<DashIcon className="date-picker__dash-icon" />
				</div>
				<Input
					onChange={onBeforeChangeHandler}
					placeholder="before"
					type="date"
					className="date-picker__input"
				/>
			</div>
		</Select>
	)
}

export default DatePicker
