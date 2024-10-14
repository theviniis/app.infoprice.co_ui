import { getInputBrlMaskValues } from "./getInputBrlMaskValues";

describe("getUseInputBrlMaskValues", () => {
	it("should return the event value, the mask value and the float value", () => {
		const event = {
			target: {
				value: "1.234",
			},
		} as never;
		const result = getInputBrlMaskValues(event);
		expect(result).toEqual({
			event: "1.234",
			mask: "1.234",
			float: 1234,
		});
	});

	it("it should return the event value with masked zero", () => {
		const event = {
			target: {
				value: "",
			},
		} as never;
		const result = getInputBrlMaskValues(event);
		expect(result).toEqual({
			event: "",
			mask: "0",
			float: 0,
		});
	});

	it("it should return the event value with masked empty", () => {
		const event = {
			target: {
				value: "",
			},
		} as never;
		const result = getInputBrlMaskValues(event, { allowEmpty: true });
		expect(result).toEqual({
			event: "",
			mask: "",
			float: 0,
		});
	});
});
