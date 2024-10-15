import { expect } from "@storybook/test";
import { fireEvent, render } from "@testing-library/react";
import { CurrencyInputProps } from "../CurrencyInput.types";
import { InputCurrency } from "./InfoCurrencyInput";

const handleChange = jest.fn();

const props: CurrencyInputProps = {
	value: 1,
	onChange: (event) => handleChange(event.target.value),
	precision: 2,
};

describe("<InputCurrency />", () => {
	it("should render", () => {
		const { getByRole } = render(<InputCurrency {...props} />);
		const input = getByRole("textbox");
		expect(input).toBeInTheDocument();
	});

	it("should render with masked value", () => {
		const { getByRole } = render(<InputCurrency {...props} />);
		const input = getByRole("textbox");
		fireEvent.change(input, { target: { value: 2000 } });
		expect(handleChange).toHaveBeenCalledWith("20,00");
	});

	it("sould render with custom precision", () => {
		const { getByRole } = render(<InputCurrency {...props} value={1.99} precision={1} />);
		const input = getByRole("textbox");
		expect(input).toHaveValue("2,0");
	});

	it("should render 0 when allowEmpty is false", () => {
		const { getByRole } = render(<InputCurrency {...props} value={0} />);
		const input = getByRole("textbox");
		expect(input).toHaveValue("0,00");
	});

	it("should render an empty string when allowEmpty is false", () => {
		const { getByRole } = render(<InputCurrency {...props} value={0} allowEmpty />);
		const input = getByRole("textbox");
		expect(input).toHaveValue("");
	});

	it("should stay empty when select and delete when allowEmpty", () => {
		const { getByRole } = render(<InputCurrency {...props} value={1.99} allowEmpty />);
		const input = getByRole("textbox");
		fireEvent.change(input, { target: { value: "" } });
		expect(handleChange).toHaveBeenCalledWith("");
	});

	it("should stay not empty when select and delete when do not allowEmpty", () => {
		const { getByRole } = render(<InputCurrency {...props} value={1.99} />);
		const input = getByRole("textbox");
		fireEvent.change(input, { target: { value: "" } });
		expect(handleChange).toHaveBeenCalledWith("0,00");
	});
});
