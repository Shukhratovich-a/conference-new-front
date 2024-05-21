import { useContext } from "react";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { LoginModalContext, RegisterModalContext } from "@/contexts/modal.context";

import { LoginForm, Modal } from "@/components";

import styles from "./LoginModal.module.scss";

export const LoginModal = () => {
  const { t } = useTranslation();

  const { isOpen, setIsOpen: setLoginModal } = useContext(LoginModalContext);
  const { setIsOpen: setRegisterModal } = useContext(RegisterModalContext);

  const handleRedirect = () => {
    console.log("asd");

    setLoginModal(false);
    setRegisterModal(true);
  };

  return (
    <Modal
      className={cn(styles.modal)}
      heading={t("auth.sign-in")}
      isOpen={isOpen}
      onClose={() => setLoginModal(false)}
    >
      <LoginForm className={cn(styles.modal__form)} />

      <div className={cn(styles.modal__bottom)}>
        <a className={cn(styles.modal__bottom__link)}>Lost password?</a>
        <span className={cn(styles.modal__bottom__link)} onClick={handleRedirect}>
          Create an account
        </span>
      </div>
    </Modal>
  );
};
