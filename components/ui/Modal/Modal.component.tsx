import { FC, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

import { ModalProps } from "./Modal.props";

import { useOutsideClick } from "@/hooks/useOutsideClick";

import { IconButton } from "@/ui";

import styles from "./Modal.module.scss";

const duration = 0.2;
const modalVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-25%" },
};
let timeout: NodeJS.Timeout | null = null;

export const Modal: FC<ModalProps> = ({ className, children, heading, isOpen = true, onClose, ...props }) => {
  const ref = useOutsideClick<HTMLDivElement>(onClose);

  useEffect(() => {
    if (isOpen) {
      if (timeout) clearTimeout(timeout);
      document.body.classList.add(styles["body--modal"]);
    } else {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.body.classList.remove(styles["body--modal"]);
      }, duration * 1000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.body.classList.remove(styles["body--modal"]);
      }, duration * 1000);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className={cn(styles.modal, { [styles["modal--open"]]: isOpen })} {...props}>
            <div className={cn(styles.modal__dialog)}>
              <motion.div
                className={cn(styles.modal__content, className)}
                variants={modalVariants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ duration }}
                ref={ref}
              >
                <div className={cn(styles.modal__header)}>
                  <span>{heading}</span>

                  <IconButton icon="IconModalClose" onClick={onClose} />
                </div>

                <div className={cn(styles.modal__body)}>{children}</div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className={cn(styles.modal__backdrop)}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};
