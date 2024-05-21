import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeaderProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {
  placeholder?: boolean;
  variant?: "primary" | "secondary";
  position?: "absolute" | "static" | "sticky";
}
