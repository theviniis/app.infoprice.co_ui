import CurrencyInput from "react-currency-input-field";
import * as T from "../CurrencyInput.types";

export const ReactCurrencyInputField = ({
	value,
	precision = 0,
	thousandSeparator = ".",
	decimalSeparator = ",",
	selectOnFocus = false,
	onFocus,
	onChangeValue,
	...props
}: T.CurrencyInputProps) => {
	return (
		<CurrencyInput
			value={value}
			onValueChange={(_v, _n, values) => {
				onChangeValue?.(values?.float || 0);
			}}
			decimalScale={precision}
			decimalSeparator={decimalSeparator}
			groupSeparator={thousandSeparator}
			fixedDecimalLength={precision}
			allowDecimals={!!precision}
			decimalsLimit={precision}
			onFocus={(e) => {
				if (selectOnFocus) e.target.select();
				onFocus?.(e);
			}}
			{...props}
		/>
	);
};
