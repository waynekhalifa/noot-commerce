import type { GetServerSideProps, NextPage } from "next";
import { Cookies, Pages, Routes } from "@/constants/enums";
import { CookieValueTypes, getCookie } from "cookies-next";
import Header from "@/components/Header";
import HomeSections from "@/components/HomeSections";
import Footer from "@/components/Footer";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const Dashboard: NextPage<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <HomeSections />
      <Footer />
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
