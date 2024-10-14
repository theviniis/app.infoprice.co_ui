import { maskNumberToBrl } from "./maskNumberToBrl";

describe("maskInputValue", () => {
	it("should parse with default options", () => {
		const result = maskNumberToBrl(1000);
		expect(result).toBe("1.000");
	});

	it("should return an masked value string", () => {
		const result = maskNumberToBrl(1000);
		expect(result).toBe("1.000");
	});

	it("should work with zero", () => {
		const result = maskNumberToBrl(0);
		expect(result).toBe("0");
	});

	it("sould work with negative values", () => {
		const result = maskNumberToBrl(-1000);
		expect(result).toBe("-1.000");
	});

	it("should work with decimal values", () => {
		const result = maskNumberToBrl(1000.5);
		expect(result).toBe("1.001");
	});

	it("should work with decimal values with 1 precision", () => {
		const result = maskNumberToBrl(1000.49, { precision: 1 });
		expect(result).toBe("1.000,5");
	});

	it("should work with decimal values with 3 precision", () => {
		const result = maskNumberToBrl(1000.555, { precision: 3 });
		expect(result).toBe("1.000,555");
	});

	it('should work with decimal separtator as "."', () => {
		const result = maskNumberToBrl(1000.555, {
			precision: 3,
			decimalSeparator: ".",
		});
		expect(result).toBe("1.000.555");
	});

	it('should work with thousand separtator as ","', () => {
		const result = maskNumberToBrl(1000.555, {
			precision: 3,
			decimalSeparator: ".",
			thousandSeparator: ",",
		});
		expect(result).toBe("1,000.555");
	});

	it("should return an empty string when value is zero and allowEmpty is true", () => {
		const result = maskNumberToBrl(0, { allowEmpty: true });
		expect(result).toBe("");
	});
});
