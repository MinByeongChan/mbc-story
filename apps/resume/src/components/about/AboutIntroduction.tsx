import React from "react";
import { fontWeight } from "@/utils/StyleTheme";
import { ObserveText } from "@/components/ui";

export const AboutIntroduction = () => {
  return (
    <ul className="ml-5 list-disc">
      <li>
        <ObserveText size="md" lineHeight="md" weight={fontWeight.normal}>
          안녕하세요! {new Date().getFullYear() - 2020 + 1}년차 &nbsp;
        </ObserveText>
        <ObserveText size="md" lineHeight="md" weight={fontWeight.bold}>
          프론트엔드 주니어 개발자&nbsp;
        </ObserveText>
        <ObserveText size="md" lineHeight="md" weight={fontWeight.normal}>
          입니다.
        </ObserveText>
      </li>
    </ul>
  );
};
