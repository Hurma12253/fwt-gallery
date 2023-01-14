export interface IDatePickerValue {
	from: string
	before: string
}

export interface IDatePickerProps {
	onChange?: (value: IDatePickerValue) => void
}
