import { useState } from "react";

export const useToggle = (initialState = false) => {
	const [isOpen, setIsOpen] = useState(() => initialState);

	const toggleOn = () => setIsOpen(true);

	const toggleOff = () => setIsOpen(false);

	const set = (value: boolean) => setIsOpen(value);

	return { isOpen, toggleOn, toggleOff, set };
};
