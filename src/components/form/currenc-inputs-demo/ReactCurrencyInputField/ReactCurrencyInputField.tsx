import CurrencyInput from "react-currency-input-field";
import * as T from "../CurrencyInput.types";
export const ReactCurrencyInputField = ({
	value,
	precision,
	thousandSeparator,
	decimalSeparator,
	selectOnFocus,
	onFocus,
	onChangeValue,
}: T.CurrencyInputProps) => {
	return (
		<CurrencyInput
			defaultValue={value}
			onValueChange={(_v, _n, values) => {
				onChangeValue(values?.float || 0);
			}}
			decimalScale={precision}
			decimalSeparator={decimalSeparator}
			groupSeparator={thousandSeparator}
			fixedDecimalLength={precision}
			allowDecimals={!!precision}
			onFocus={(e) => {
				if (selectOnFocus) e.target.select();
				onFocus?.(e);
			}}
		/>
	);
};
