import { useState } from "react";
import type { NextPage } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import Header from "@/components/Header";

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
