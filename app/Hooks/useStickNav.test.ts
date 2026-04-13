import { renderHook } from "@testing-library/react";
import { useStickyNav } from "./useStickyNav";
import { createRef } from "react";

describe("useStickyNav", () => {
  let observeMock: jest.Mock;
  let disconnectMock: jest.Mock;
  let callback: IntersectionObserverCallback;

  beforeEach(() => {
    observeMock = jest.fn();
    disconnectMock = jest.fn();

    global.IntersectionObserver = jest.fn((cb) => {
      callback = cb;
      return {
        observe: observeMock,
        disconnect: disconnectMock,
      } as unknown as IntersectionObserver;
    });
  });

  it("sets stickyVisible to true when not intersecting", () => {
    const ref = createRef<HTMLDivElement>();
    ref.current = document.createElement("div");

    const { result } = renderHook(() => useStickyNav(ref));

    callback(
      [{ isIntersecting: false } as IntersectionObserverEntry],
      {} as unknown as IntersectionObserver,
    );

    expect(result.current).toBe(true);
  });

  it("sets stickyVisible to false when intersecting", () => {
    const ref = createRef<HTMLDivElement>();
    ref.current = document.createElement("div");

    const { result } = renderHook(() => useStickyNav(ref));

    callback([{ isIntersecting: true } as IntersectionObserverEntry]);

    expect(result.current).toBe(false);
  });
});
