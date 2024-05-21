import { FC, useState } from "react";
import { Poppins, Montserrat } from "next/font/google";
import cn from "classnames";

import { LayoutProps } from "./Layout.props";

import { ILayout } from "@/types/layout.type";

import { AuthContextProvider } from "@/contexts/auth.context";
import { HeaderContextProvider } from "@/contexts/header.context";
import { ModalProvider } from "@/contexts/modal.context";

import { Header } from "./Header/Header.component";
import { Footer } from "./Footer/Footer.component";
import { Sidebar } from "./Sidebar/Sidebar.component";

import { LoginModal, RegisterModal } from "@/components";

import styles from "./Layout.module.scss";

// const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const montserrat = Montserrat({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700"] });

export const Layout: FC<LayoutProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.layout, montserrat.className)} {...props}>
      <Header className={cn(styles.header)} />

      <main className={cn(styles.main)}>
        <div>{children}</div>
      </main>

      <LoginModal />
      <RegisterModal />
    </div>
  );
};

export const withLayout = <T extends ILayout>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AuthContextProvider token={props.token} user={props.user}>
        <HeaderContextProvider header={props.header}>
          <ModalProvider>
            <Layout>
              <Component {...props} />
            </Layout>
          </ModalProvider>
        </HeaderContextProvider>
      </AuthContextProvider>
    );
  };
};
