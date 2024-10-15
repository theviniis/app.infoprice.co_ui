export interface CurrencyInputProps {
	value: number;
	precision?: number;
	decimalSeparator?: string;
	thousandSeparator?: string;
	selectOnFocus?: boolean;
	allowEmpty?: boolean;
	onChangeValue?: (value: number) => void;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
