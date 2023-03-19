import { useState } from "react";
import type { NextPage } from "next";
import Breadcrumb from "@/components/common/Breadcrumb";
import NewHeader from "@/components/NewHeader";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}
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
      <NewHeader
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
