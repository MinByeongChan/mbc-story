import { css } from '@styled-system/css';
import RcCalendar from 'react-calendar';
import { GridTitle } from '@components/shared/gridTitle/GridTitle';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { useMemo } from 'react';

dayjs.locale('ko');

const sectionStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  p: '4',
});

const descriptionWrapperStyles = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '2',
  alignItems: 'center',
  mb: '8',
});

const calendarWrapperStyles = css({
  width: '100%',
  maxWidth: '320px',
  backgroundColor: 'ivory.50',
  borderRadius: '24px',
  padding: '20px 10px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',

  // 1. 캘린더 전체 레이아웃
  '& .react-calendar': {
    width: '100%',
    background: 'transparent',
    border: 'none',
    fontFamily: 'inherit',
  },

  // 2. 네비게이션 (2025년 11월)
  '& .react-calendar__navigation': {
    display: 'none',
  },
  '& .react-calendar__navigation__label': {
    flexGrow: '0 !important',
    fontSize: '18px',
    fontWeight: '700',
    color: 'charcoal.700',
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    border: 'none',
  },
  '& .react-calendar__navigation button': {
    minWidth: '24px',
    background: 'none',
    fontSize: '18px',
    color: 'grey.400',
    cursor: 'pointer',
  },
  '& .react-calendar__navigation button:hover': {
    color: 'primary',
  },

  // 3. 요일 헤더 (월 화 수 ...)
  '& .react-calendar__month-view__weekdays': {
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '500',
    color: 'charcoal.600',
    textDecoration: 'none',
    marginBottom: '12px',
  },
  '& .react-calendar__month-view__weekdays__weekday': {
    padding: '4px 0',
  },
  '& .react-calendar__month-view__weekdays__weekday abbr': {
    textDecoration: 'none',
    cursor: 'default',
  },

  // 4. 날짜 그리드
  '& .react-calendar__month-view__days': {
    rowGap: '8px',
  },
  '& .react-calendar__tile': {
    maxWidth: '100%',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    fontSize: '15px',
    fontWeight: '500',
    color: 'charcoal.700',
    border: 'none',
    position: 'relative',
    zIndex: 1,
  },

  // 5. 주말 색상
  '& .react-calendar__month-view__days__day--weekend': {
    color: '#FF6B6B', // 빨강 (일요일 포함)
  },
  // 토요일만 별도로 하려면 nth-child 사용 가능하지만,
  // 보통 달력 라이브러리에서 토/일 모두 weekend 클래스를 줌.
  // ko-KR locale + gregory 타입이면 일요일이 첫번째(nth-child 1), 토요일이 마지막(nth-child 7)
  '& .react-calendar__month-view__days__day--weekend:nth-child(7n)': {
    color: 'charcoal.700', // 토요일은 검정/차콜 (원하면 파랑)
  },

  // 이웃 달 날짜
  '& .react-calendar__month-view__days__day--neighboringMonth': {
    color: 'grey.300 !important',
  },

  // 6. 원형 스타일 (abbr 태그 스타일링)
  '& abbr': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },

  //   // 오늘 날짜
  //   '& .react-calendar__tile--now abbr': {
  //     backgroundColor: 'gold.300',
  //     color: 'white',
  //     fontWeight: 'bold',
  //   },

  // 선택된 날짜 (Wedding Day)
  '& .react-calendar__tile--active': {
    background: 'none !important',
  },
  '& .react-calendar__tile--active abbr': {
    backgroundColor: 'primary',
    color: 'white',
    fontWeight: 'bold',
    boxShadow: '0 2px 8px rgba(239, 207, 210, 0.6)',
  },
});

interface CalendarProps {
  weddingDate: string;
  location: string;
  weddingDay: string;
}

export const Calendar = ({ weddingDay, weddingDate, location }: CalendarProps) => {
  const date = dayjs(weddingDate);

  const diffToday = useMemo(() => date.diff(dayjs(), 'day'), [date]);
  const timeState = useMemo(() => {
    if (diffToday === 0) {
      return 0;
    } else if (diffToday > 0) {
      return -1;
    } else {
      return 1;
    }
  }, [diffToday]);

  const weddingDayAbs = useMemo(() => {
    if (diffToday === 0) {
      return '오늘';
    }
    return `${Math.abs(diffToday)}`;
  }, [diffToday]);

  const weddingDayText = useMemo(() => {
    if (timeState === 0) {
      return '입니다';
    } else if (timeState === 1) {
      return '일 지났습니다';
    } else {
      return '일 남았습니다';
    }
  }, [timeState]);

  return (
    <section className={sectionStyles}>
      <GridTitle>Calendar</GridTitle>

      <div className={descriptionWrapperStyles}>
        <p className={css({ fontWeight: 'bold', fontSize: 'lg', color: 'charcoal.700' })}>
          {date.format('YYYY년 M월 D일 dddd A h시 mm분')}
        </p>
        <p className={css({ fontSize: 'md', color: 'charcoal.600', mt: '1' })}>{location}</p>
      </div>

      <div className={calendarWrapperStyles}>
        <RcCalendar
          locale="ko-KR"
          value={date.toDate()}
          defaultActiveStartDate={date.toDate()}
          minDetail="month"
          maxDetail="month"
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={true}
          calendarType="gregory"
          formatDay={(_, date) => dayjs(date).format('D')}
        />
      </div>

      <p className={css({ fontSize: 'md', color: 'charcoal.600', mt: '20' })}>
        <span>{weddingDay} 결혼식이 </span>
        <span className={css({ fontWeight: 'bold', color: 'Highlight' })}>{weddingDayAbs}</span>
        <span>{weddingDayText}</span>
      </p>
    </section>
  );
};
