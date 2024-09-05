import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export type PopoverProps = {
	children: React.ReactNode;
	isOpen: boolean;
	triggerRef: HTMLElement | null;
	onClose: () => void;
	closeOnOutsideClick?: boolean;
	closeOnEscape?: boolean;
};

export const Popover = ({ children, isOpen, onClose, triggerRef, closeOnOutsideClick = true, closeOnEscape = true }: PopoverProps) => {
	useEffect(() => {
		const handleClick = (event: KeyboardEvent) => {
			if (event.key === "Escape" && closeOnEscape) {
				onClose();
			}
		};
		document.addEventListener("keydown", handleClick);
		return () => {
			document.removeEventListener("keydown", handleClick);
		};
	}, [onClose, closeOnEscape]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const container = document.getElementById("popover-container");

			if (container && !container.contains(event.target as Node) && triggerRef && !triggerRef.contains(event.target as Node) && closeOnOutsideClick) {
				onClose();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [onClose, triggerRef, closeOnOutsideClick]);

	if (!isOpen) return null;

	return ReactDOM.createPortal(<div id="popover-container">{children}</div>, document.body);
};
