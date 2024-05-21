import { useContext } from "react";

import { RegisterModalContext } from "@/contexts/modal.context";

import { Modal } from "@/ui";
import { RegisterForm } from "../RegisterForm/RegisterForm.component";

export const RegisterModal = () => {
  const { isOpen, setIsOpen } = useContext(RegisterModalContext);

  const handleClose = () => {
    if (!setIsOpen) return;
    setIsOpen(false);
  };

  return (
    <Modal heading="register" isOpen={isOpen} onClose={handleClose}>
      <RegisterForm />
    </Modal>
  );
};
