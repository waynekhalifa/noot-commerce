import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import {
  Cookies,
  FormActions,
  Models,
  Pages,
  Resources,
  Routes,
} from "@/constants/enums";
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

  return (
    <Admin
      resourceName={Resources.PRODUCTS}
      singleName={Models.PRODUCT}
      action={FormActions.UPDATE}
      id={query.id!}
    />
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

export default AdminPage;
