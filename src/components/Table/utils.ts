import { RowData } from "./types";

const LENGTH = 10;

export const makeDatapoint = ({
	id = "1",
	price = 0.89,
	margin = 2.87,
	cpi = 108.5,
	competitorsPrice = 0.82,
	cost = 0.82,
	salesTaxPercentage = 4.0,
	expansesPercentage = 1.0,
}: Partial<RowData>): RowData => {
	return {
		id,
		price,
		margin,
		cpi,
		competitorsPrice,
		cost,
		expansesPercentage,
		salesTaxPercentage,
	};
};

export const getData = async () => {
	const data = Array.from({ length: LENGTH }, (_, i) => makeDatapoint({ id: i.toString() }));
	return new Promise<RowData[]>((resolve) => {
		resolve(data);
	});
};

export const saveOnBlur = async (value: number): Promise<RowData[]> => {
	return new Promise<RowData[]>((resolve) => {
		setTimeout(() => {
			resolve(
				Array.from({ length: LENGTH }, (_, i) => {
					const id = i.toString();
					return makeDatapoint({ id, cpi: value * i, margin: value * i });
				}),
			);
		}, 1000);
	});
};
