import { create } from 'zustand';

interface RequestExpertModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useRequestExpertModal = create<RequestExpertModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useRequestExpertModal;
