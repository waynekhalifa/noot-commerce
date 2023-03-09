import { useRouter } from "next/router";
import { List } from "@mui/material";

import MenuItem from "./MenuItem";
import { Pages, Routes } from "@/constants/enums";

interface Props {
  handleDrawer: (value: boolean) => void;
}

const NavMenu: React.FC<Props> = ({ handleDrawer }) => {
  const { push } = useRouter();

  const handleClick = (slug: string) => {
    handleDrawer(false);

    push(`/${Routes.ADMIN}/${slug}`);
  };

  return (
    <nav className="main-navigation">
      <List disablePadding sx={{ display: "flex" }}>
        <MenuItem
          title={Pages.HOME}
          handleClick={() => handleClick(Pages.HOME)}
        />
        <MenuItem
          title={Pages.E_COMMERCE}
          handleClick={() => handleClick(Pages.E_COMMERCE)}
        />
        <MenuItem
          title={Pages.PRICING}
          handleClick={() => handleClick(Pages.PRICING)}
        />
        <MenuItem
          title={Pages.CONTACT}
          handleClick={() => handleClick(Pages.CONTACT)}
        />
      </List>
    </nav>
  );
};

export default NavMenu;
