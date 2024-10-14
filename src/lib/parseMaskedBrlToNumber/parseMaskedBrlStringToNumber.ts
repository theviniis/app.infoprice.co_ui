export const parseMaskedBrlStringToNumber = (maskedValue: string, precision = 0): number => {
	if (!maskedValue) return 0;
	const value = parseFloat(maskedValue.replace(/\D/g, "")) / Math.pow(10, precision);
	if (Number.isNaN(value)) return 0;
	return value;
};
