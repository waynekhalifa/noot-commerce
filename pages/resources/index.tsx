import { useState } from "react";
import type { NextPage } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}
const ResourcesPage: NextPage<Props> = ({ toggleTheme }) => {
  const [burger, setBurger] = useState<boolean>(false);
  const openBurgerNav = () => {
    setBurger(true);
  };
  const closeBurgerNav = () => {
    setBurger(false);
  };
  return (
    <>
     <NextSeo
        title="Resources"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
      />
      <Header
        toggleTheme={toggleTheme}
        openBurgerNav={openBurgerNav}
        closeBurgerNav={closeBurgerNav}
        burger={burger}
      />
      <Breadcrumb pageName="Resources Page" description="description." />
    </>
  );
};

export default ResourcesPage;
