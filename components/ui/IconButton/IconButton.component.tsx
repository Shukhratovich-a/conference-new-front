import { FC } from "react";
import cn from "classnames";

import { IconButtonProps, icons } from "./IconButton.props";

import styles from "./IconButton.module.scss";

export const IconButton: FC<IconButtonProps> = ({ className, children, variant = "transparent", icon, ...props }) => {
  const IconComp = icons[icon];

  return (
    <button
      className={cn(styles.button, {
        [styles["button--contained"]]: variant === "contained",
        [styles["button--transparent"]]: variant === "transparent",
        [styles["button--outlined"]]: variant === "outlined",
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
};
