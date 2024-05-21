import React from "react";
import cn from "classnames";

import { CheckboxProps } from "./Checkbox.props";

import styles from "./Checkbox.module.scss";

export const Checkbox = React.forwardRef(
  (
    { className, error, label, type = "checkbox", ...props }: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <label className={cn(styles.wrapper, className)}>
        <span className={cn(styles.wrapper__inner, className)}>
          <input
            className={cn(styles.input, { [styles.error]: error }, "visually-hidden")}
            ref={ref}
            type={type}
            {...props}
          />

          <span className={cn(styles.input__controller)} />

          <span className={cn(styles.input__label)}>{label}</span>
        </span>

        {error && <span className={styles.error__message}>{error.message}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
