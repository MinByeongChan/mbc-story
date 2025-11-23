import { Copyright } from '@components/footer';
import { Introduction } from '@components/introduction';
import { MainLayout } from '@components/layout';
import { Invite } from '@components/invite';

const KnotMain = () => {
  const introduction = {
    imageSrc: '/sample/introduction.jpg',
    title: '병찬 & 보영',
    subtitle: '2025년 11월 23일',
  };

  return (
    <MainLayout>
      <Introduction {...introduction} />
      <Invite />
      <Copyright />
    </MainLayout>
  );
};

export default KnotMain;
