import React, { useState } from 'react'
import Select from 'components/select'
import Input from 'components/input'
import { ReactComponent as DashIcon } from 'assets/svg/dash.svg'
import {
	IDatePickerProps,
	IDatePickerValue,
} from 'components/date-picker/types'

const DatePicker: React.FC<IDatePickerProps> = ({ onChange }) => {
	const [value, setValue] = useState<IDatePickerValue>({
		from: '',
		before: '',
	})

	const onChangeHandler = (value: IDatePickerValue) => {
		if (onChange) {
			onChange(value)
		}
	}

	const onFromChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
		event
	) => {
		const newValue = { ...value, from: event.target.value }

		setValue(newValue)
		onChangeHandler(newValue)
	}

	const onBeforeChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
		event
	) => {
		const newValue = { ...value, before: event.target.value }

		setValue(newValue)
		onChangeHandler(newValue)
	}
    
	return (
		<Select placeholder="Created" isSeparatorOff>
			<div className="date-picker__container">
				<Input
					onChange={onFromChangeHandler}
					placeholder="from"
					type="date"
				/>
				<div className="date-picker__icon-container">
					<DashIcon className="date-picker__dash-icon" />
				</div>
				<Input
					onChange={onBeforeChangeHandler}
					placeholder="before"
					type="date"
				/>
			</div>
		</Select>
	)
}

export default DatePicker
