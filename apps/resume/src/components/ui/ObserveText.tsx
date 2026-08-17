import React, { HTMLAttributes, useEffect, useRef, useState } from "react";

type ObserveTextElement = "p" | "h3" | "h4";
type ObserveTextProps = HTMLAttributes<HTMLElement> & {
  as?: ObserveTextElement;
};

export const ObserveText = ({ as, style, ...props }: ObserveTextProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const Component = as ?? "p";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      },
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <Component
      {...props}
      ref={(element) => {
        ref.current = element;
      }}
      style={{
        ...style,
        opacity: visible ? "1" : "0",
        transition: "0.6s cubic-bezier(0.36, 0, 0.66, -0.56)",
      }}
    />
  );
};
