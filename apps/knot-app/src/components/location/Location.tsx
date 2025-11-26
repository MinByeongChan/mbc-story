import { KakaoMap } from '@components/location/KakaoMap';
import { GridTitle } from '@components/shared/gridTitle';
import { css } from '@styled-system/css';

const paragraphStyles = css({
  lineHeight: '2',
});

export const Location = () => {
  return (
    <section>
      <GridTitle>Location</GridTitle>

      <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
        <span className={css({ fontWeight: 'bold', fontSize: 'lg' })}>오시는 길</span>
      </div>

      <div
        className={css({
          mt: '10',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        })}
      >
        <p className={paragraphStyles}>서울 중구 퇴계로18길 46</p>
        <p className={paragraphStyles}>명동 라루체</p>
        <p className={paragraphStyles}>4F 루아르홀</p>
        <p className={paragraphStyles}>02-766-8200</p>
      </div>

      <KakaoMap address="서울 중구 퇴계로18길 46" />
    </section>
  );
};
