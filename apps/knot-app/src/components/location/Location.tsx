import { MODAL_KEY } from '@components/layout/model/constants';
import { useModal } from '@components/layout/model/useModal';
import { KakaoMap } from '@components/location/KakaoMap';
import { DefaultAlert } from '@components/shared/alert';
import { DefaultButton } from '@components/shared/Button';
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
  const { openModal } = useModal((state) => state);

  const handleClickCopyAddressButton = () => {
    navigator.clipboard.writeText(address);
    openModal({
      type: MODAL_KEY.ALERT,
      children: <DefaultAlert>주소가 복사되었습니다.</DefaultAlert>,
    });
  };

  return (
    <section className={css({ p: '4' })}>
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
        <DefaultButton
          className={css({ px: '10 !important' })}
          onClick={handleClickCopyAddressButton}
        >
          주소 복사
        </DefaultButton>
      </div>

      <KakaoMap address={address} />
    </section>
  );
};
