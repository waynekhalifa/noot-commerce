import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Cookies, Pages, Routes } from "@/constants/enums";
import { CookieValueTypes, getCookie } from "cookies-next";
import { ParsedUrlQuery } from "querystring";
import Admin from "@/components/Admin";

export interface PostPageQuery extends ParsedUrlQuery {
  page?: string;
  sort_by?: string;
  sort_order?: string;
  slug?: string;
}

const AdminPage: NextPage = () => {
  const router = useRouter();
  const query = router.query as PostPageQuery;

  return <Admin slug={query.slug!} />;
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

export default AdminPage;
