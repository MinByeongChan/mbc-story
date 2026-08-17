import React from "react";
import { fontWeight } from "@/utils/StyleTheme";
import { ObserveText } from "@/components/ui";

export const AboutEducation = () => {
  return (
    <>
      <ul className="space-y-2 pl-2">
        <li className="flex items-start">
          <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
            o 2014.03 ~ 2020.02 성결대학교 정보통신공학부 전공
          </ObserveText>
        </li>
        <li className="flex items-start">
          <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
            o 2020.05 정보처리기사 자격증 취득
          </ObserveText>
        </li>
        <li className="flex items-start">
          <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
            o 2019.12 ~ 2020.03 IT동아리 넥스터즈 16기 개발자 활동
          </ObserveText>
        </li>
      </ul>
    </>
  );
};
