import { useState } from "react";
import type { Metadata, NextPage } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Header from "@/components/Header";
import { NextSeo } from "next-seo";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

export const metadata: Metadata = {
  title: 'Templates',
  description: 'Read my thoughts on software development, design, and more.',
};


const TemplatesPage: NextPage<Props> = ({ toggleTheme }) => {
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
        title="Templates"
        description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
        />
      <Header
        toggleTheme={toggleTheme}
        openBurgerNav={openBurgerNav}
        closeBurgerNav={closeBurgerNav}
        burger={burger}
      />
      <Breadcrumb pageName="Templates Page" description="description." />
    </>
  );
};

export default TemplatesPage;
