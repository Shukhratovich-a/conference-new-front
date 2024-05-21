import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeroProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "children"> {}
