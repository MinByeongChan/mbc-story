import * as Dialog from '@radix-ui/react-dialog';
import { DefaultModalLayout } from '@components/layout';
import { useModal } from '@components/layout/model/useModal';
import { css } from '@styled-system/css';
import { DefaultButton } from '../Button';

interface DefaultAlertProps {
  title?: string;
  children: React.ReactNode;
}

export const DefaultAlert = ({ title, children }: DefaultAlertProps) => {
  const { modalState, onChangeModal: handleChangeModal } = useModal((state) => state);
  const alertModatState = modalState?.find((item) => item.type === 'ALERT');

  if (!alertModatState) return null;

  return (
    <DefaultModalLayout
      isOpen={alertModatState?.isOpen}
      onOpenChange={(open) => handleChangeModal('ALERT', open)}
    >
      <div className={css({ width: '400px', p: '6' })}>
        {title && (
          <Dialog.Title className={css({ fontSize: 'lg', fontWeight: 'bold', mb: '4' })}>
            {title}
          </Dialog.Title>
        )}
        {children}
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
    </DefaultModalLayout>
  );
};
