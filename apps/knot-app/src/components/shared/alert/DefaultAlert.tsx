import * as Dialog from '@radix-ui/react-dialog';
import { ModalLayout } from '@components/layout';
import { useModal } from '@components/layout/model/useModal';
import { css } from '@styled-system/css';
import { DefaultButton } from '../Button';

interface DefaultAlertProps {
  title?: string;
  children: React.ReactNode;
}

export const DefaultAlert = ({ title, children }: DefaultAlertProps) => {
  const handleChangeModal = useModal((state) => state.onChangeModal);

  return (
    <ModalLayout onOpenChange={(open) => handleChangeModal('ALERT', open)}>
      <div className={css({ width: '400px', p: '6' })}>
        <Dialog.Title className={css({ fontSize: 'lg', fontWeight: 'bold' })}>{title}</Dialog.Title>
        <Dialog.Description className={css({ mt: title ? '4' : '0' })}>
          {children}
        </Dialog.Description>
        <div className={css({ mt: '6', display: 'flex', justifyContent: 'flex-end' })}>
          <Dialog.Close asChild>
            <DefaultButton
              className={css({
                backgroundColor: 'grey.200',
                borderRadius: 'md',
                fontSize: 'sm',
                border: 'none',
                transition: 'background-color 0.2s',
                '&:hover': { backgroundColor: 'grey.300' },
              })}
            >
              닫기
            </DefaultButton>
          </Dialog.Close>
        </div>
      </div>
    </ModalLayout>
  );
};
