import { create } from 'zustand';

interface ReviewModalStore {
  isOpen: boolean;
  expertId: string;
  onOpen: (id: string) => void;
  onClose: () => void;
}

const useReviewModal = create<ReviewModalStore>((set) => ({
  isOpen: false,
  expertId: '',
  onOpen: (id) => set({ isOpen: true , expertId: id}),
  onClose: () => set({ isOpen: false , expertId: ''})
}));


export default useReviewModal;
