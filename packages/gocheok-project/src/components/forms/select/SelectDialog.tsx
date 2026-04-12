import * as Dialog from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';

import { useSelectContext } from '@gocheok/components/forms/select/SelectContext';

type SelectDialogProps = {
  children: React.ReactNode;
};

export const SelectDialog = ({ children }: SelectDialogProps) => {
  const { state, dispatch } = useSelectContext();
  const isMobile = window.innerWidth < 768;
  const position = state.dialogPosition;

  const handleOpenChange = (open: boolean) => {
    dispatch({ type: 'SET_OPEN', open });
  };

  return (
    <Dialog.Root open={state.isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          data-state={state.isOpen ? 'open' : 'closed'}
          className={twMerge(
            'pointer-events-none fixed inset-0 z-200',
            'data-[state=closed]:animate-overlay-hide data-[state=open]:animate-overlay-show',
            isMobile && 'pointer-events-auto bg-black/50',
          )}
        />
        <Dialog.Content
          className={twMerge(
            'max-w-440px fixed z-201 transform overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none',
            'data-[state=closed]:animate-select-dialog-out data-[state=open]:animate-select-dialog-in',
            isMobile && 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          )}
          style={
            !isMobile && position
              ? { top: position.y, left: position.x, transform: 'none' }
              : undefined
          }
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
