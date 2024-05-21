import cn from "classnames";

import { ButtonProps } from "./Button.props";

import styles from "./Button.module.scss";

export const Button = ({
  children,
  className,
  size = "md",
  color = "primary",
  variant = "contained",
  rounded = true,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles["button--sm"]]: size === "sm",
        [styles["button--md"]]: size === "md",
        [styles["button--primary"]]: color === "primary",
        [styles["button--secondary"]]: color === "secondary",
        [styles["button--contained"]]: variant === "contained",
        [styles["button--outlined"]]: variant === "outlined",
        [styles["button--rounded"]]: rounded,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
