import type { GetServerSideProps, NextPage } from "next";

import Auth from "@/components/Auth/Auth";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { Cookies, Pages, Routes } from "@/constants/enums";
import { deleteCookie } from "cookies-next";
import { useEffect } from "react";
import { logout } from "@/services/auth";

export interface PostPageQuery extends ParsedUrlQuery {
  page?: string;
  sort_by?: string;
  sort_order?: string;
  slug?: string;
}

const Accounts: NextPage = () => {
  const router = useRouter();
  const query = router.query as PostPageQuery;

  useEffect(() => {
    logout();

    // eslint-disable-next-line
  }, []);

  return <Auth slug={query.slug!} />;
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
  res,
}) => {
  // @TODO should check if user is logged in and redirect to dashboard

  if (params!.slug === Pages.LOGOUT) {
    deleteCookie(Cookies.ACCESS_TOKEN, { req, res });
    deleteCookie(Cookies.REFRESH_TOKEN, { req, res });
    deleteCookie(Cookies.SESSION_USER, { req, res });
    deleteCookie(Cookies.CSRF_TOKEN, { req, res });

    return {
      redirect: {
        destination: `/${Routes.AUTH}/${Pages.LOGIN}`,
        permanent: false,
      },
    };
  }

  return { props: {} };
};

export default Accounts;
