import { Copyright } from '@components/footer';
import { Introduction } from '@components/introduction';
import { MainLayout } from '@components/layout';
import { Invite } from '@components/invite';
import { Calendar } from '@components/calendar';

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

  return (
    <MainLayout>
      <Introduction {...introduction} />
      <Invite />
      <Calendar {...calendar} />
      <Copyright />
    </MainLayout>
  );
};

export default KnotMain;
