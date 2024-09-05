import { InputText } from "@/components";
import { render } from "@testing-library/react";

describe("<InputText />", () => {
	it("should render", () => {
		const { getByRole } = render(<InputText type="text" />);
		const input = getByRole("textbox");
		expect(input).toBeDefined();
	});
});
