import type React from 'react';

export type DatePickerValue = Date | null;

export interface DatePickerProps {
  /** 제어 컴포넌트로 쓸 때 사용. `null`은 비어 있음. */
  value?: DatePickerValue;
  /** 비제어 초기값. `value`와 동시 사용 금지. */
  defaultValue?: DatePickerValue;
  /** 사용자가 날짜를 선택/지웠을 때 호출. 파싱 실패 시 `null` 전달. */
  onChange?: (next: DatePickerValue) => void;
  /** 입력 포맷. dayjs 토큰 (예: 'YYYY-MM-DD'). 기본값은 'YYYY-MM-DD'. */
  format?: string;
  /** 선택 가능한 최소/최대 날짜 (포함). */
  minDate?: Date;
  maxDate?: Date;
  /** 특정 날짜 비활성화. 반환값이 true면 비활성. */
  isDateDisabled?: (date: Date) => boolean;
  /** 주 시작 요일 (0=일, 1=월). 기본 0. */
  weekStartsOn?: 0 | 1;
  /** dayjs locale 키. 기본 'ko'. */
  locale?: string;
  /** 이전/다음 월 이동 버튼에 표시할 아이콘. */
  previousMonthIcon?: React.ReactNode;
  nextMonthIcon?: React.ReactNode;
  /** placeholder, id, name, disabled, required는 input에 그대로 전달. */
  placeholder?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  /** 트리거 버튼/입력 컨테이너 className. */
  className?: string;
  /** input ref (React 19 ref-as-prop 컨벤션). */
  ref?: React.Ref<HTMLInputElement>;
}
