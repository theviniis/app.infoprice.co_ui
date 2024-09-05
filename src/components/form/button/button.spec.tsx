import { Button } from "@/components";
import { render } from "@testing-library/react";

describe("<Button />", () => {
	it("should render", () => {
		const { getByRole } = render(<Button />);
		const button = getByRole("button");
		expect(button).toBeInTheDocument();
	});
});
