import { FC } from "react";
import cn from "classnames";

import { RemainderProps } from "./Remainder.props";

import { Container } from "@/ui";

import styles from "./Remainder.module.scss";

export const Remainder: FC<RemainderProps> = ({ className, ...props }) => {
  return (
    <div className={cn(styles.remainder, className)} {...props}>
      <Container>
        <ul className={cn(styles.remainder__list)}>
          <li className={cn(styles.remainder__item)}>
            <strong className={cn(styles.remainder__item__number)}>830</strong>
            <span className={cn(styles.remainder__item__text)}>days</span>
          </li>
          <li className={cn(styles.remainder__item)}>
            <strong className={cn(styles.remainder__item__number)}>13</strong>
            <span className={cn(styles.remainder__item__text)}>hours</span>
          </li>
          <li className={cn(styles.remainder__item)}>
            <strong className={cn(styles.remainder__item__number)}>13</strong>
            <span className={cn(styles.remainder__item__text)}>minutes</span>
          </li>
          <li className={cn(styles.remainder__item)}>
            <strong className={cn(styles.remainder__item__number)}>13</strong>
            <span className={cn(styles.remainder__item__text)}>seconds</span>
          </li>
        </ul>
      </Container>
    </div>
  );
};
