import { Copyright } from '@components/footer';
import { Introduction } from '@components/introduction';
import { MainLayout } from '@components/layout';
import { Invite } from '@components/invite';
import { Calendar } from '@components/calendar';
import { Gallery } from '@components/gallery';
import { Location } from '@components/location';
import { DirectionsSection } from '@components/directionSection';
import { type DirectionsInfoItem } from '@components/directionSection/type';
import { AttendanceInfo } from '@components/attendanceInfo';
import { Account, AccountItem } from '@components/account';
import { css } from '@styled-system/css';

const KnotMain = () => {
  const introduction = {
    imageSrc: '/sample/introduction.jpg',
    title: (
      <span className={css({ display: 'flex', alignItems: 'center', gap: '1' })}>
        병찬 <img src="/sample/favorite.svg" alt="heart" width={20} height={20} /> 보영
      </span>
    ),
    subtitle: '2025년 11월 23일',
  };

  const calendar = {
    weddingDay: '병찬 & 보영',
    weddingDate: '2025-11-22 13:00:00',
    location: '명동 라루체 4층 루아르홀',
  };

  const galleryImageList = [
    {
      id: 'thumbnail1',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail1',
    },
    {
      id: 'thumbnail2',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail2',
    },
    {
      id: 'thumbnail3',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail3',
    },
    {
      id: 'thumbnail4',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail4',
    },
    {
      id: 'thumbnail5',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail5',
    },
    {
      id: 'thumbnail6',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail6',
    },
    {
      id: 'thumbnail7',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail7',
    },
    {
      id: 'thumbnail8',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail8',
    },
    {
      id: 'thumbnail9',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail9',
    },
    {
      id: 'thumbnail10',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail10',
    },
    {
      id: 'thumbnail11',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail11',
    },
    {
      id: 'thumbnail12',
      src: '/sample/gallery_sample.png',
      alt: 'gallery_thumbnail12',
    },
  ];

  const locationInfo = {
    address: '서울 중구 퇴계로18길 46',
    name: '명동 라루체',
    subInfo: '4F 루아르홀',
    contact: '02-766-8200',
  };

  const directionsInfo: DirectionsInfoItem[] = [
    {
      title: '버스',
      titleImageSrc: '/sample/directions_bus.png',
      titleImageAlt: 'directions_bus_icon',
      info: [
        {
          type: 'grid',
          subTitle: '퇴계로2가.명동역',
          description: '104, 105, 421, 463, 507, 604, N16, 7017',
        },
        {
          type: 'grid',
          subTitle: '명동입구',
          description: '104, 421, 463, 507, 604, N16, 7017, 05',
        },
      ],
    },
    {
      title: '지하철',
      titleImageSrc: '/sample/directions_subway.png',
      titleImageAlt: 'directions_subway_icon',
      info: [
        {
          type: 'grid',
          subTitle: '4호선 명동역',
          description: '3번출구(퍼시픽 호텔 우측길로 60M)',
        },
      ],
    },
    {
      title: '자가용',
      titleImageSrc: '/sample/directions_car.png',
      titleImageAlt: 'directions_car_icon',
      info: [
        {
          type: 'grid',
          subTitle: '내비게이션',
          description: '“라루체 웨딩홀" 검색',
        },
        {
          type: 'grid',
          subTitle: '주소 검색',
          description: '"서울특별시 중구 퇴계로 18길 46" 입력',
        },
      ],
    },
    {
      title: '주차',
      titleImageSrc: '/sample/directions_parking.png',
      titleImageAlt: 'directions_parking_icon',
      info: [
        {
          type: 'list',
          items: [
            `2시간 무료주차가 가능합니다\n\t(이후 15분당 2,000원 추가요금이 붙습니다.)`,
            `라루체 웨딩홀 입구에서 주차 안내해 드립니다.`,
            '입차 영수증을 지참하신 후, 연회장 입구에서 주차 도장을 찍 으면 됩니다',
          ],
        },
      ],
    },
  ];

  const groomAccountItemList: AccountItem[] = [
    {
      name: '민병찬',
      number: '257-910629-82807',
      bank: '하나은행',
    },
    {
      name: '민은식',
      number: '257-910629-82807',
      bank: '하나은행',
    },
    {
      name: '이정옥',
      number: '257-910629-82807',
      bank: '하나은행',
    },
  ];

  const brideAccountItemList: AccountItem[] = [
    {
      name: '김보영',
      number: '257-910629-82807',
      bank: '하나은행',
    },
    {
      name: '민은식',
      number: '257-910629-82807',
      bank: '하나은행',
    },
    {
      name: '이정옥',
      number: '257-910629-82807',
      bank: '하나은행',
    },
  ];

  return (
    <MainLayout>
      <Introduction {...introduction} />
      <Invite />
      <Calendar {...calendar} />
      <Gallery imageList={galleryImageList} />
      <Location {...locationInfo} />
      <DirectionsSection directionsItemList={directionsInfo} />
      <AttendanceInfo />
      <Account
        groomAccountItemList={groomAccountItemList}
        brideAccountItemList={brideAccountItemList}
      />
      <Copyright />
    </MainLayout>
  );
};

export default KnotMain;
