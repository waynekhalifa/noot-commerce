import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeSections from "@/components/HomeSections";
import type { NextPage } from "next";

import Head from "next/head";
import { useState } from "react";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const Page: NextPage<Props> = ({ toggleTheme }) => {
  const [burger, setBurger] = useState<boolean>(false);
  const openBurgerNav = () => {
    setBurger(true);
  };
  const closeBurgerNav = () => {
    setBurger(false);
  };
  return (
    <>
      <Head>
        <title>Noot</title>
        <meta name="description" content={"Noot"} />
      </Head>
      <Header
        toggleTheme={toggleTheme}
        openBurgerNav={openBurgerNav}
        closeBurgerNav={closeBurgerNav}
        burger={burger}
      />
      <HomeSections burger={burger} />
      <Footer />
    </>
  );
};

export default Page;
