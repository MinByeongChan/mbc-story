import { ModalLayout } from '@components/layout/ModalLayout';
import { useModal } from '@components/layout/model/useModal';
import { css } from '@styled-system/css';
import { MODAL_KEY } from '@components/layout/model/constants';
import { v4 as uuidv4 } from 'uuid';
import { ContactDetailsItem } from './type';
import { InviteDetailsItem } from '@components/invite/InviteDetailsItem';

interface InviteDetailsModalProps {
  brideItems: ContactDetailsItem[];
  groomItems: ContactDetailsItem[];
}

const ulStyles = css({ display: 'flex', flexDirection: 'column', gap: '4' });

export const InviteDetailsModal = ({ brideItems, groomItems }: InviteDetailsModalProps) => {
  const handleChangeModal = useModal((state) => state.onChangeModal);

  return (
    <ModalLayout onOpenChange={(open) => handleChangeModal(MODAL_KEY.INVITE_DETAILS, open)}>
      <div className={css({ width: '400px', p: '6' })}>
        <ul className={ulStyles}>
          {groomItems.map((item) => (
            <InviteDetailsItem key={uuidv4()} {...item} />
          ))}
        </ul>

        <div className={css({ borderBottom: '1px dashed', borderColor: 'grey.200', my: '4' })} />

        <ul className={ulStyles}>
          {brideItems.map((item) => (
            <InviteDetailsItem key={uuidv4()} {...item} />
          ))}
        </ul>
      </div>
    </ModalLayout>
  );
};
