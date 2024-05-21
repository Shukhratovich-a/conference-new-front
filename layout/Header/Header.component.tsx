import { FC, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import cn from "classnames";

import { HeaderProps } from "./Header.props";

import { AuthContext } from "@/contexts/auth.context";
import { HeaderContext } from "@/contexts/header.context";
import { LoginModalContext, RegisterModalContext } from "@/contexts/modal.context";

import { Language } from "@/components";
import { Button, Container, ButtonGroup } from "@/ui";
import { Navbar } from "@/layout/Navbar/Navbar.component";

import styles from "./Header.module.scss";

export const Header: FC<HeaderProps> = ({ className, variant = "secondary", position = "absolute", ...props }) => {
  const { token, user, logout } = useContext(AuthContext);
  const { setIsOpen: setLoginModal } = useContext(LoginModalContext);
  const { setIsOpen: setRegisterModal } = useContext(RegisterModalContext);

  const { pathname } = useRouter();
  const { t } = useTranslation();

  const { header } = useContext(HeaderContext);

  const handleLogout = () => {
    if (!logout) return;

    logout();
  };

  const openModal = (modal: "login" | "register") => {
    if (modal === "login") setLoginModal(true);
    if (modal === "register") setRegisterModal(true);
  };

  return (
    <header
      className={cn(
        styles.header,
        {
          [styles["header--primary"]]: variant === "primary",
          [styles["header--secondary"]]: variant === "secondary",
          [styles["header--absolute"]]: position === "absolute",
          [styles["header--static"]]: position === "static",
          [styles["header--sticky"]]: position === "sticky",
        },
        className
      )}
      {...props}
    >
      <Container className={cn(styles.header__container)}>
        <Link className={cn(styles.header__logo)} href="/">
          CONFERENCE
        </Link>

        <div className={cn(styles.header__inner)}>
          <Navbar className={cn(styles.header__nav)} />

          <Language className={cn(styles.header__language)} />

          {user && token ? (
            <div>
              <ButtonGroup color={variant} size="sm">
                <Link href={`/profile`}>
                  <Button className={cn(styles.button)} tabIndex={-1}>
                    {`${user.firstName} ${user.lastName}`}
                  </Button>
                </Link>
                <Button className={cn(styles.button)} onClick={handleLogout}>
                  {t("logout")}
                </Button>
              </ButtonGroup>
            </div>
          ) : (
            <ButtonGroup color={variant} size="sm">
              <Button onClick={() => openModal("login")}>{t("auth.sign-in")}</Button>
              <Button onClick={() => openModal("register")}>{t("auth.sign-up")}</Button>
            </ButtonGroup>
          )}
        </div>
      </Container>
    </header>
  );
};
