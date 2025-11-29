import { KakaoMap } from '@components/location/KakaoMap';
import { GridTitle } from '@components/shared/gridTitle';
import { css } from '@styled-system/css';

const paragraphStyles = css({
  lineHeight: '2',
});

interface LocationProps {
  address: string;
  name: string;
  subInfo: string;
  contact: string;
}

export const Location = ({ address, name, subInfo, contact }: LocationProps) => {
  return (
    <section>
      <GridTitle>Location</GridTitle>

      <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
        <span className={css({ fontWeight: 'bold', fontSize: 'lg' })}>오시는 길</span>
      </div>

      <div
        className={css({
          mt: '10',
          mb: '20',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        })}
      >
        <p className={paragraphStyles}>{address}</p>
        <p className={paragraphStyles}>{name}</p>
        <p className={paragraphStyles}>{subInfo}</p>
        <p className={paragraphStyles}>{contact}</p>
      </div>

      <div
        className={css({
          mt: '10',
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <button
          className={css({
            rounded: 'md',
            px: '4',
            py: '2',
            cursor: 'pointer',
            backgroundColor: 'primary',
            color: 'white',
          })}
          onClick={() => {
            navigator.clipboard.writeText(address);
          }}
        >
          주소 복사
        </button>
      </div>

      <KakaoMap address={address} />
    </section>
  );
};
