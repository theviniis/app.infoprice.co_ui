import { GetInputBrlMaskValues, getInputBrlMaskValues, maskNumberToBrl, MaskNumberToBrlOptions } from "@/lib";
import { ChangeEvent, ComponentProps, FocusEvent, forwardRef, useCallback, useMemo } from "react";

export type InputCurrencyValueData = GetInputBrlMaskValues;

type InputReplacedProps = Replace<
	ComponentProps<"input">,
	{
		value: number;
		onChange?: (event: ChangeEvent<HTMLInputElement>, values: GetInputBrlMaskValues) => void;
	}
>;

export type InputCurrencyProps = InputReplacedProps & {
	onChangeValue?: (values: GetInputBrlMaskValues) => void;
	currency?: MaskNumberToBrlOptions;
	selectOnFocus?: boolean;
};

const InputCurrency = forwardRef<HTMLInputElement, InputCurrencyProps>(
	({ value = 0, currency = {}, selectOnFocus = false, onChange, onChangeValue, onFocus, ...props }, ref) => {
		const mask = useMemo(() => maskNumberToBrl(value, currency), [value, currency]);

		const handleChange = useCallback(
			(event: ChangeEvent<HTMLInputElement>) => {
				const result = getInputBrlMaskValues(event, currency);
				event.target.value = result.mask;
				onChange?.(event, result);
				onChangeValue?.(result);
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

InputCurrency.displayName = "InputCurrency";

export { InputCurrency };
