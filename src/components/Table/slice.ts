import { RowData } from "./types";

type Action = { type: "UPDATE_BY_ID"; id: RowData["id"]; payload: Partial<RowData> } | { type: "RESET" } | { type: "SET_STATE"; payload: RowData[] };

const initialState: RowData[] = [];

const reducer = (state: RowData[] = initialState, action: Action): RowData[] => {
	switch (action.type) {
		case "UPDATE_BY_ID":
			return state.map((row) => {
				if (row.id === action.id) return { ...row, ...action.payload };
				return row;
			});
		case "SET_STATE":
			return action.payload;
		case "RESET":
			return initialState;
		default:
			return state;
	}
};

const SET_STATE = (payload: RowData[]): Action => ({ type: "SET_STATE", payload });

const UPDATE_BY_ID = (id: RowData["id"], payload: Partial<RowData>): Action => ({ type: "UPDATE_BY_ID", id, payload });

const RESET = () => ({ type: "RESET" });

export default {
	reducer,
	initialState,
	actions: { SET_STATE, UPDATE_BY_ID, RESET },
};
