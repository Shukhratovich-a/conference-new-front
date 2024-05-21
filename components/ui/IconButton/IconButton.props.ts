import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { IconArrowBottom, IconModalClose } from "@/icons";

export const icons = {
  IconArrowBottom,
  IconModalClose,
};

export interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "contained" | "outlined" | "transparent";
  icon: keyof typeof icons;
}
