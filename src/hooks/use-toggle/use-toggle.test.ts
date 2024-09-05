import { useToggle } from "@/hooks";
import { act, renderHook } from "@testing-library/react";

describe("useModal", () => {
	it("should return the correct initial state", () => {
		const { result } = renderHook(() => useToggle());
		expect(result.current.isOpen).toBe(false);
	});

	it("should return the correct initial state", () => {
		const { result } = renderHook(() => useToggle(true));
		expect(result.current.isOpen).toBe(true);
	});

	it("should open the modal", () => {
		const { result } = renderHook(() => useToggle());
		act(() => result.current.toggleOn());
		expect(result.current.isOpen).toBe(true);
	});

	it("should close the modal", () => {
		const { result } = renderHook(() => useToggle());
		act(() => result.current.toggleOff());
		expect(result.current.isOpen).toBe(false);
	});

	it("should set the modal state", () => {
		const { result } = renderHook(() => useToggle());
		act(() => result.current.set(true));
		expect(result.current.isOpen).toBe(true);
	});
});
