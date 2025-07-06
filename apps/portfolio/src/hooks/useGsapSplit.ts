import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";

interface UseGsapSplitProps {
  className?: string;
  callback?: () => void;
  stagger?: number;
  duration?: number;
}

export const useGsapSplit = ({
  className = "split",
  callback,
  stagger = 0.3,
  duration = 1,
}: UseGsapSplitProps) => {
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    let split;
    SplitText.create(`.${className}`, {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration,
          yPercent: 100,
          opacity: 0,
          stagger,
          ease: "expo.out",
        });
        return split;
      },
    });

    callback?.();
  });
};
