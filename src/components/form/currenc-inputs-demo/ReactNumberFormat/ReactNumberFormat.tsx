import { NumericFormat } from "react-number-format";
import * as T from "../CurrencyInput.types";

export const ReactNumberFormat = ({
	value,
	precision,
	thousandSeparator,
	decimalSeparator,
	selectOnFocus,
	onChangeValue,
	onFocus,
	...props
}: T.CurrencyInputProps) => {
	return (
		<NumericFormat
			value={value}
			onValueChange={({ floatValue }) => onChangeValue?.(floatValue || 0)}
			decimalScale={precision}
			decimalSeparator={decimalSeparator}
			thousandSeparator={thousandSeparator}
			allowLeadingZeros={!!precision}
			fixedDecimalScale={!!precision}
			onFocus={(e) => {
				if (selectOnFocus) e.target.select();
				onFocus?.(e);
			}}
			{...props}
		/>
	);
};
