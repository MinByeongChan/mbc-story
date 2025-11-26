import { Copyright } from '@components/footer';
import { Introduction } from '@components/introduction';
import { MainLayout } from '@components/layout';
import { Invite } from '@components/invite';
import { Calendar } from '@components/calendar';
import { Gallery } from '@components/gallery';
import { Location } from '@components/location';

const KnotMain = () => {
  const introduction = {
    imageSrc: '/sample/introduction.jpg',
    title: '병찬 & 보영',
    subtitle: '2025년 11월 23일',
  };

  const calendar = {
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

  return (
    <MainLayout>
      <Introduction {...introduction} />
      <Invite />
      <Calendar {...calendar} />
      <Gallery imageList={galleryImageList} />
      <Location {...locationInfo} />
      <Copyright />
    </MainLayout>
  );
};

export default KnotMain;
