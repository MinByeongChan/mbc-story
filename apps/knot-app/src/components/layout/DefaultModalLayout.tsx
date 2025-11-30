import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { css } from '@styled-system/css';

export interface DefaultModalLayoutProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const DefaultModalLayout = ({
  isOpen,
  onOpenChange: handleOpenChange,
  children,
}: DefaultModalLayoutProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={css({
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'fixed',
            inset: 0,
            zIndex: 50,
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
          })}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
