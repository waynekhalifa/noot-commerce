import type { GetServerSideProps, NextPage } from "next";
import { Cookies, Models, Pages, Resources, Routes } from "@/constants/enums";
import { CookieValueTypes, getCookie } from "cookies-next";
import Admin from "@/components/Admin";

const AdminPage: NextPage = () => (
  <Admin resourceName={Resources.PRODUCTS} singleName={Models.PRODUCT} />
);

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

export default AdminPage;
