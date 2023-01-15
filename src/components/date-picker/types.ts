import { ISelectProps } from 'components/select/types'

export interface IDatePickerValue {
	from: string
	before: string
}

export interface IDatePickerProps extends ISelectProps {
	onDateChange?: (value: IDatePickerValue) => void
}
