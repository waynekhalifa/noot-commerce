import type { NextPage } from "next";
import DashboardHeader from "@/components/Dashboard/DashboardHeader.tsx/DashboardHeader";
import { GetServerSideProps } from "next";
import { Cookies } from "@/constants/enums";
import { CookieValueTypes, getCookie } from "cookies-next";
import Widget from "@/components/UI/Widget";
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
    res
  });

  // if (!cookieSession) {
  //   return {
  //     redirect: {
  //       destination: `/${Routes.ACCOUNTS}/${Pages.LOGIN}`,
  //       permanent: false,
  //     },
  //   };
  // }

  return { props: {} };
};

export default Dashboard;
