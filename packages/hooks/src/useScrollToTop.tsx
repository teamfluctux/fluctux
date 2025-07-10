import React, { useEffect, useRef, useState } from "react";

export const useScrollToTop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = containerRef.current
        ? containerRef.current.scrollTop
        : window.scrollY || document.documentElement.scrollTop;

      setIsVisible(scrollTop > 300);
    };

    const target = containerRef.current;

    if (target) {
      target.addEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (target) {
        target.removeEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return {
    scrollToTop,
    isVisible,
    containerRef,
  };
};
