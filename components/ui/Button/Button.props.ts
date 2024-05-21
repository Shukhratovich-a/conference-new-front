import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  size?: "md" | "sm";
  color?: "primary" | "secondary";
  variant?: "outlined" | "contained";
  rounded?: boolean;
}
