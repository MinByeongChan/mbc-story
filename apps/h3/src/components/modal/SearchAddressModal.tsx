import { ModalLayout } from '@/components/modal/ModalLayout';
import { useModal } from '@/hooks/useModal';

export const SearchAddressModal = () => {
  const closeModal = useModal((state) => state.closeModal);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeModal('search-address');
    }
  };
  return (
    <ModalLayout onOpenChange={handleOpenChange}>
      <div>FindAddressModal</div>
    </ModalLayout>
  );
};
