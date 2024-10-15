import { IMaskInput } from "react-imask";
import * as T from "../CurrencyInput.types";

export const IMaskCurrencyInput = ({
	value,
	precision = 0,
	decimalSeparator = ",",
	thousandSeparator = ".",
	selectOnFocus,
	onChangeValue,
	onFocus,
	...props
}: T.CurrencyInputProps) => {
	return (
		<IMaskInput
			value={value.toString()}
			scale={precision}
			mask={Number}
			padFractionalZeros
			autofix
			unmask={"typed"}
			thousandsSeparator={thousandSeparator}
			mapToRadix={[thousandSeparator, decimalSeparator]}
			radix={decimalSeparator}
			onAccept={(value) => onChangeValue?.(value as never)}
			onFocus={(e) => {
				if (selectOnFocus) e.target.select();
				onFocus?.(e);
			}}
			{...props}
		/>
	);
};
