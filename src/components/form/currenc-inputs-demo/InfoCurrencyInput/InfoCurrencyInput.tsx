import { getInputBrlMaskValues, maskNumberToBrl } from "@/lib";
import { ChangeEvent, FocusEvent, forwardRef, useCallback, useMemo } from "react";
import * as T from "../CurrencyInput.types";

const InfoCurrencyInput = forwardRef<HTMLInputElement, T.CurrencyInputProps>(
	(
		{ value = 0, selectOnFocus = false, onChange, onChangeValue, onFocus, precision, thousandSeparator, decimalSeparator, allowEmpty, ...props },
		ref,
	) => {
		const currency = useMemo(() => {
			return {
				precision: precision ?? 2,
				thousandSeparator: thousandSeparator ?? ".",
				decimalSeparator: decimalSeparator ?? ",",
				allowEmpty: allowEmpty ?? false,
			};
		}, [precision, thousandSeparator, decimalSeparator, allowEmpty]);

		const mask = useMemo(() => maskNumberToBrl(value, currency), [value, currency]);

		const handleChange = useCallback(
			(event: ChangeEvent<HTMLInputElement>) => {
				const result = getInputBrlMaskValues(event, currency);
				event.target.value = result.mask;
				onChange?.(event);
				onChangeValue?.(result.float);
			},
			[onChange, onChangeValue, currency],
		);

		const handleFocus = useCallback(
			(event: FocusEvent<HTMLInputElement>) => {
				onFocus?.(event);
				if (selectOnFocus) event.target.select();
			},
			[onFocus, selectOnFocus],
		);

		return <input {...props} ref={ref} type="text" value={mask} onChange={handleChange} onFocus={handleFocus} />;
	},
);

InfoCurrencyInput.displayName = "InputCurrency";

export { InfoCurrencyInput as InputCurrency };
