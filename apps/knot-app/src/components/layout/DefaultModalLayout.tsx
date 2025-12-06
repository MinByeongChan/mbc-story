import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { css } from '@styled-system/css';

export interface DefaultModalLayoutProps {
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const DefaultModalLayout = ({
  onOpenChange: handleOpenChange,
  children,
}: DefaultModalLayoutProps) => {
  const modalRoot = document.getElementById('modal-root');

  return (
    <Dialog.Root open onOpenChange={handleOpenChange}>
      <Dialog.Portal container={modalRoot}>
        <Dialog.Overlay
          className={css({
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            animation: 'overlayShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          })}
        />
        <Dialog.Content
          className={css({
            backgroundColor: 'white',
            borderRadius: 'md',
            boxShadow: 'lg',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '440px',
            zIndex: 51,
            '&:focus': { outline: 'none' },
            animation: 'contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          })}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
