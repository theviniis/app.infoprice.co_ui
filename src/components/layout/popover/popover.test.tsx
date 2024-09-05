import { fireEvent, render } from "@testing-library/react";
import { Popover, PopoverProps } from "./popover";

describe("Popover Component", () => {
	let defaultProps: PopoverProps;

	beforeEach(() => {
		defaultProps = {
			children: <div>Popover Content</div>,
			isOpen: true,
			onClose: jest.fn(),
			triggerRef: document.createElement("div"),
		};
	});

	test("renders the popover when isOpen is true", () => {
		const { getByText } = render(<Popover {...defaultProps} />);
		expect(getByText("Popover Content")).toBeInTheDocument();
	});

	test("does not render the popover when isOpen is false", () => {
		const { queryByText } = render(<Popover {...defaultProps} isOpen={false} />);
		expect(queryByText("Popover Content")).not.toBeInTheDocument();
	});

	test("calls onClose when Escape key is pressed", () => {
		render(<Popover {...defaultProps} />);
		fireEvent.keyDown(document, { key: "Escape" });
		expect(defaultProps.onClose).toHaveBeenCalled();
	});

	test("calls onClose when clicking outside the popover", () => {
		const { container } = render(<Popover {...defaultProps} />);
		fireEvent.mouseDown(container);
		expect(defaultProps.onClose).toHaveBeenCalled();
	});

	test("does not call onClose when clicking inside the popover", () => {
		const { getByText } = render(<Popover {...defaultProps} />);
		fireEvent.mouseDown(getByText("Popover Content"));
		expect(defaultProps.onClose).not.toHaveBeenCalled();
	});
});
