import { IMaskInput } from "react-imask";
import * as T from "../CurrencyInput.types";

export const IMaskCurrencyInput = ({
	value,
	precision,
	decimalSeparator,
	thousandSeparator,
	selectOnFocus,
	onChangeValue,
	onFocus,
}: T.CurrencyInputProps) => {
	return (
		<IMaskInput
			defaultValue={value}
			mask={Number}
			scale={precision}
			thousandsSeparator={thousandSeparator}
			radix={decimalSeparator}
			mapToRadix={[decimalSeparator || "."]}
			normalizeZeros={true}
			padFractionalZeros={!!precision}
			unmask="typed"
			onAccept={(value) => onChangeValue(value as never)}
			onFocus={(e) => {
				if (selectOnFocus) e.target.select();
				onFocus?.(e);
			}}
		/>
	);
};
