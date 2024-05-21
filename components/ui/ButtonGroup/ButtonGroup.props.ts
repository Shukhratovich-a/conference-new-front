import { DetailedHTMLProps, HTMLAttributes, ReactElement, ReactNode } from "react";

export interface ButtonGroupProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactElement<HTMLButtonElement | HTMLAnchorElement> | ReactElement<HTMLButtonElement | HTMLAnchorElement>[];
  size?: "md" | "sm";
  color?: "primary" | "secondary";
  rounded?: boolean;
}
