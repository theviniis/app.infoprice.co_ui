export type MaskNumberToBrlOptions = {
	locales?: Intl.LocalesArgument;
	decimalSeparator?: string;
	thousandSeparator?: string;
	precision?: number;
	allowEmpty?: boolean;
};

export const maskNumberToBrl = (
	value: number,
	{ precision = 0, decimalSeparator = ",", thousandSeparator = ".", allowEmpty = false }: MaskNumberToBrlOptions = {},
): string => {
	let parsedValue = value.toLocaleString("pt-BR", {
		minimumFractionDigits: precision,
		maximumFractionDigits: precision,
		currency: "BRL",
	});

	if (decimalSeparator) {
		parsedValue = parsedValue.replace(",", decimalSeparator);
	}

	if (thousandSeparator) {
		parsedValue = parsedValue.replace(".", thousandSeparator);
	}

	if (allowEmpty && value === 0) {
		parsedValue = "";
	}

	return parsedValue;
};
