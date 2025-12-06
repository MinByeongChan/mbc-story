import { DefaultButton } from '@components/shared/Button';
import { css } from '@styled-system/css';
import { ContactDetailsItem as InviteDetailsItemProps } from './type';

const liStyles = css({ display: 'flex', flexDirection: 'column', gap: '4' });
const buttonWrapperStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2',
});
export const InviteDetailsItem = ({ name, relation, tel }: InviteDetailsItemProps) => {
  const handleClickPhoneButton = () => {
    window.open(`tel:${tel}`, '_blank');
  };
  const handleClickMessageButton = () => {
    window.open(`sms:${tel}`, '_blank');
  };

  return (
    <li className={liStyles}>
      <p>
        <span>{relation} </span>
        <span className={css({ fontWeight: 'bold' })}>{name} </span>
      </p>
      <div className={buttonWrapperStyles}>
        <DefaultButton
          onClick={handleClickPhoneButton}
          className={css({ width: '100%', fontSize: 'sm' })}
        >
          전화하기
        </DefaultButton>
        <DefaultButton
          onClick={handleClickMessageButton}
          className={css({ width: '100%', fontSize: 'sm' })}
        >
          문자 보내기
        </DefaultButton>
      </div>
    </li>
  );
};
