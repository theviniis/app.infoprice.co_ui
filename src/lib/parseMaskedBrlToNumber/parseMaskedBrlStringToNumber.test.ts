import { parseMaskedBrlStringToNumber } from "./parseMaskedBrlStringToNumber";

describe("parseMaskedBrlStringToNumber", () => {
	it("should parse a masked BRL string to a number", () => {
		expect(parseMaskedBrlStringToNumber("1.234")).toBe(1234);
	});

	it("should parse a masked BRL string to a number with precision 1", () => {
		expect(parseMaskedBrlStringToNumber("1")).toBe(1);
	});

	it("should parse a masked BRL string to a number with precision 3", () => {
		expect(parseMaskedBrlStringToNumber("1.234,567", 3)).toBe(1234.567);
	});

	it("should parse a masked BRL string to a number with precision 2", () => {
		expect(parseMaskedBrlStringToNumber("1", 2)).toBe(0.01);
	});

	it('should return 0 when the masked value is ""', () => {
		expect(parseMaskedBrlStringToNumber("")).toBe(0);
	});

	it('should return 0 when the masked value is "0"', () => {
		expect(parseMaskedBrlStringToNumber("0")).toBe(0);
	});

	it("should return 0 when the masked value is Nan", () => {
		expect(parseMaskedBrlStringToNumber("NaN")).toBe(0);
	});
});
