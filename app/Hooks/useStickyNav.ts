import { useEffect, useState, RefObject } from "react";

export const useStickyNav = (ref: RefObject<HTMLElement | null>) => {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref]);

  return stickyVisible;
};
