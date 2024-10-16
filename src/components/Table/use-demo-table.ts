import { useCallback, useEffect } from "react";
import { InputFields, RowData } from "./types";
import { useDatapoints } from "./use-datapoints";

export const useDemoTable = () => {
	const [data, { updateById }] = useDatapoints();

	const handlePriceChange = useCallback(
		(value: number) => {
			return (dataKey: InputFields, rowData: RowData) => {
				const { id } = rowData;
				rowData[dataKey] = value;
				updateById(id, rowData);
			};
		},
		[updateById],
	);

	useEffect(() => {
		const handleFocusNextColumnInput = ({ key, target }: KeyboardEvent) => {
			if (key !== "Enter") return;
			const classes = ["info-input-currency", "react-number-format", "react-currency-input-field", "imask-currency-input"] as const;
			const currentColumn = (target as HTMLElement).getAttribute("data-column-type") as (typeof classes)[number];
			if (!classes.includes(currentColumn)) return;
			const nodeInputList = document.querySelectorAll(`[data-column-type="${currentColumn}"]`); // as NodeListOf<HTMLInputElement>;
			const currentInputIndex = Array.from(nodeInputList).indexOf(target as HTMLElement);
			const nextInputIndex = currentInputIndex + 1;
			if (nextInputIndex >= nodeInputList.length) return;
			const nextInput = nodeInputList[nextInputIndex] as HTMLElement;
			nextInput.focus();
		};
		document.addEventListener("keydown", handleFocusNextColumnInput);
		return () => document.removeEventListener("keydown", handleFocusNextColumnInput);
	}, []);

	return { data, handlePriceChange };
};
