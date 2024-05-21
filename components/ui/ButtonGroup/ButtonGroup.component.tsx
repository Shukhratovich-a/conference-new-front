import { FC } from "react";
import cn from "classnames";

import { ButtonGroupProps } from "./ButtonGroup.props";

import styles from "./ButtonGroup.module.scss";

export const ButtonGroup: FC<ButtonGroupProps> = ({
  className,
  children,
  size = "md",
  color = "primary",
  rounded = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.wrapper,
        {
          [styles["wrapper--sm"]]: size === "sm",
          [styles["wrapper--md"]]: size === "md",
          [styles["wrapper--primary"]]: color === "primary",
          [styles["wrapper--secondary"]]: color === "secondary",
          [styles["wrapper--rounded"]]: rounded,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
