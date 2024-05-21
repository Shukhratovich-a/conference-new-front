import React, { PropsWithChildren, createContext } from "react";

import { IHeader } from "@/types/header.type";

export interface IHeaderContext {
  header: IHeader;
}

export const HeaderContext = createContext<IHeaderContext>({ header: { mainText: "", logo: "" } });

export const HeaderContextProvider = ({ header, children }: PropsWithChildren<IHeaderContext>): JSX.Element => {
  return <HeaderContext.Provider value={{ header }}>{children}</HeaderContext.Provider>;
};
