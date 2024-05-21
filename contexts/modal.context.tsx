import { FC, PropsWithChildren, createContext, useState } from "react";

interface IModalContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface IModalProps {
  isOpen: boolean;
}

// LOGIN
export const LoginModalContext = createContext<IModalContext>({ isOpen: false, setIsOpen: () => {} });
export const LoginModalProvider: FC<PropsWithChildren<IModalProps>> = ({ isOpen, children }) => {
  const [modalState, setModalState] = useState<boolean>(isOpen);

  const setIsOpen = (isOpen: boolean) => {
    setModalState(isOpen);
  };

  return <LoginModalContext.Provider value={{ isOpen: modalState, setIsOpen }}>{children}</LoginModalContext.Provider>;
};

// REGISTER
export const RegisterModalContext = createContext<IModalContext>({ isOpen: false, setIsOpen: () => {} });
export const RegisterModalProvider: FC<PropsWithChildren<IModalProps>> = ({ isOpen, children }) => {
  const [modalState, setModalState] = useState<boolean>(isOpen);

  const setIsOpen = (isOpen: boolean) => {
    setModalState(isOpen);
  };

  return (
    <RegisterModalContext.Provider value={{ isOpen: modalState, setIsOpen }}>{children}</RegisterModalContext.Provider>
  );
};

// ALL MODALS
export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LoginModalProvider isOpen={false}>
      <RegisterModalProvider isOpen={false}>{children}</RegisterModalProvider>
    </LoginModalProvider>
  );
};
