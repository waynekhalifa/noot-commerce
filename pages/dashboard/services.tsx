import type { NextPage } from "next";
import DashboardHeader from "@/components/Dashboard/DashboardHeader.tsx/DashboardHeader";
import { GetServerSideProps } from "next";
import { Cookies, Pages, Routes } from "@/constants/enums";
import { CookieValueTypes, getCookie } from "cookies-next";
import DashboardWidgets from "@/components/Dashboard/DashboardWidgets";

const Dashboard: NextPage = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardWidgets />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookieSession: CookieValueTypes = getCookie(Cookies.ACCESS_TOKEN, {
    req,
    res,
  });

  if (!cookieSession) {
    return {
      redirect: {
        destination: `/${Routes.AUTH}/${Pages.LOGIN}`,
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Dashboard;
