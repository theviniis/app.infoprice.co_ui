import { Label } from "@/components";
import { render } from "@testing-library/react";

describe("<Label />", () => {
	it("should render", () => {
		const children = "label";
		const { getByText } = render(<Label>{children}</Label>);
		expect(getByText(children)).toBeDefined();
	});
});
