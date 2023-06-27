import { useState } from 'react';

interface ReturnValue {
  isModalOpen: boolean;
  showModal: () => void;
  hideModal: () => void;
}

export const useModal = (): ReturnValue => {
  const [isModalOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };

  const hideModal = (): void => {
    setIsOpen(false);
  };

  return { isModalOpen, showModal, hideModal };
};
