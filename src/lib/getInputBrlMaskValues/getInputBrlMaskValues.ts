import { ChangeEvent } from "react";
import { maskNumberToBrl, MaskNumberToBrlOptions } from "../maskNumberToBrl";
import { parseMaskedBrlStringToNumber } from "../parseMaskedBrlToNumber";

export const getInputBrlMaskValues = (event: ChangeEvent<HTMLInputElement>, config?: MaskNumberToBrlOptions) => {
	const eventValue = event.target.value;
	const floatValue = parseMaskedBrlStringToNumber(eventValue, config?.precision);
	let maskValue = maskNumberToBrl(floatValue, config);
	if (config?.allowEmpty && floatValue === 0) maskValue = "";
	event.target.value = maskValue;
	return { event: eventValue, mask: maskValue, float: floatValue };
};

export type GetInputBrlMaskValues = ReturnType<typeof getInputBrlMaskValues>;
