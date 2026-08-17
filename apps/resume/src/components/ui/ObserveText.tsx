import TextDefault, { TextDefaultProps } from "@/components/ui/TextDefault";
import React, { useEffect, useRef, useState } from "react";

type ObserveTextProps = TextDefaultProps;

export const ObserveText = (props: ObserveTextProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

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
    <TextDefault
      ref={ref}
      {...props}
      style={{
        opacity: visible ? "1" : "0",
        transition: "0.6s cubic-bezier(0.36, 0, 0.66, -0.56)",
      }}
    />
  );
};
