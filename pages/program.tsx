import { FC } from "react";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { IUser } from "@/types/user.type";
import { IHeader } from "@/types/header.type";

import { get as getHeader } from "@/api/header.api";
import { getByToken } from "@/api/user.api";

import { withLayout } from "@/layout/Layout";

const ProgramPage: FC<ProgramPageProps> = () => {
  return <>program</>;
};

export const getServerSideProps: GetServerSideProps<ProgramPageProps> = async ({ req: { cookies }, locale }) => {
  const { data: header } = await getHeader({ language: locale });

  const token = cookies.token || null;
  let user = null;

  if (token) {
    const { data } = await getByToken(token);
    user = data;
  }

  return {
    props: {
      header,
      token,
      user,
      ...(await serverSideTranslations(String(locale))),
    },
  };
};

export default withLayout(ProgramPage);

interface ProgramPageProps extends Record<string, unknown> {
  header: IHeader;
  token: string | null;
  user: IUser | null;
}
