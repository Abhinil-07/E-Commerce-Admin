import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal
      title={"Store"}
      description={"Store Modal"}
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future create store form
    </Modal>
  );
};
