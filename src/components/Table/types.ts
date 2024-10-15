export type RowData = {
	id: string;
	price: number;
	margin: number;
	cpi: number;
	cost: number;
	competitorsPrice: number;
	salesTaxPercentage: number;
	expansesPercentage: number;
	"info-input-currency": number;
	"react-number-format": number;
	"react-currency-input-field": number;
	"imask-currency-input": number;
};

export type DataKey = keyof RowData;

export type InputFields = Extract<DataKey, "info-input-currency" | "react-number-format" | "react-currency-input-field"> | "imask-currency-input";
