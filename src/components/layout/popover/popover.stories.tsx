import { ButtonPrimary } from "@/components/form";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useRef } from "react";
import { Popover } from "./popover";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Layout/Popover",
	component: Popover,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		// backgroundColor: { control: "color" },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { children: "button", isOpen: true, onClose: fn(), triggerRef: null },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {},
	render: function Render(args) {
		const ref = useRef<HTMLButtonElement>(null);

		const [{ isOpen }, updateArgs] = useArgs();

		const onHide = () => {
			updateArgs({ isOpen: false });
		};

		const onShow = () => {
			updateArgs({ isOpen: !isOpen });
		};

		return (
			<div>
				<ButtonPrimary ref={ref} onClick={onShow}>
					click me
				</ButtonPrimary>
				<Popover {...args} triggerRef={ref.current} isOpen={isOpen} onClose={onHide}>
					<div>popover content</div>
				</Popover>
			</div>
		);
	},
};
