import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: string;
  isOpen?: boolean;
  onClose: () => void;
}
