export type RowData = {
	id: string;
	price: number;
	margin: number;
	cpi: number;
	cost: number;
	competitorsPrice: number;
	salesTaxPercentage: number;
	expansesPercentage: number;
};

export type DataKey = keyof RowData;

export type InputFields = Extract<DataKey, "price" | "margin" | "cpi">;
