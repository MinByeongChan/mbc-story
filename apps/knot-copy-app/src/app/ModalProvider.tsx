import { PropsWithChildren } from 'react';
import { useModal } from '@components/layout/model/useModal';
import { v4 as uuidv4 } from 'uuid';

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const state = useModal((state) => state);

  return (
    <>
      {children}
      {state.modalState.map((modal) => {
        if (!modal.isOpen) return null;
        return <dialog key={uuidv4()}>{modal.children}</dialog>;
      })}
    </>
  );
};
