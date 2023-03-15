import type { GetServerSideProps, NextPage } from "next";
import DashboardHeader from "@/components/DashboardHeader.tsx/DashboardHeader";
import { CookieValueTypes, getCookie } from "cookies-next";
import { Cookies, Pages, Routes } from "@/constants/enums";

const Dashboard: NextPage = () => {
  return (
    <>
      <DashboardHeader />
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
