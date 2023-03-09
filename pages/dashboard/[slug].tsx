import type { GetServerSideProps, NextPage } from "next";
import { Suspense } from "react";

import ContentLoader from "@/components/UI/ContentLoader";
import { useRouter } from "next/router";
import { Cookies, Pages, Routes } from "@/constants/enums";
import { Button } from "@mui/material";
import { CookieValueTypes, getCookie } from "cookies-next";

const Dashboard: NextPage = () => {
  const { push } = useRouter();

  const handleLogout = () => push(`/${Routes.ACCOUNTS}/${Pages.LOGOUT}`);

  return (
    <>
      <Suspense fallback={<ContentLoader />}>
        <Button onClick={handleLogout}>logout</Button>
      </Suspense>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookieSession: CookieValueTypes = getCookie(Cookies.SESSION, {
    req,
    res,
  });

  if (!cookieSession) {
    return {
      redirect: {
        destination: `/${Routes.ACCOUNTS}/${Pages.LOGIN}`,
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Dashboard;
