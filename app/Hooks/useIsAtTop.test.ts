import { renderHook, act } from "@testing-library/react";
import { useIsAtTop } from "./useIsAtTop";

describe("useIsAtTop", () => {
  it("returns true when at top", () => {
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });

    const { result } = renderHook(() => useIsAtTop());

    expect(result.current).toBe(true);
  });

  it("returns false when scrolled down", () => {
    Object.defineProperty(window, "scrollY", { value: 100, writable: true });

    const { result } = renderHook(() => useIsAtTop());

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(false);
  });
});
