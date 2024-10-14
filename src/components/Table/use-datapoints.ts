import { useQuery } from "@tanstack/react-query";
import { useCallback, useReducer } from "react";
import slice from "./slice";
import { RowData } from "./types";
import { getData } from "./utils";

export const useDatapoints = () => {
	const [data, dispatch] = useReducer(slice.reducer, slice.initialState);

	const handleGetData = useCallback(async () => {
		const response = await getData();
		dispatch(slice.actions.SET_STATE(response));
		return response;
	}, []);

	const updateById = useCallback((id: RowData["id"], value: Partial<RowData>) => {
		dispatch(slice.actions.UPDATE_BY_ID(id, value));
	}, []);

	const findById = useCallback((id: RowData["id"]) => data.find((row) => row.id === id), [data]);

	useQuery({
		queryKey: ["datapoints"],
		initialData: slice.initialState,
		queryFn: handleGetData,
	});

	return [data, { updateById, findById }] as const;
};
