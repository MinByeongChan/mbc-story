import React, { PropsWithChildren } from 'react';
import { useModal } from '@components/layout/model/useModal';

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const { modalState } = useModal((state) => state);
  return (
    <>
      {children}
      {modalState.map((modal) => {
        if (!modal.isOpen) return null;
        return <React.Fragment key={modal.type}>{modal.children}</React.Fragment>;
      })}
    </>
  );
};
