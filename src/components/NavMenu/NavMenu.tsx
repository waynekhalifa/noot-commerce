import { useRouter } from "next/router";
import { List } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";

import MenuItem from "./MenuItem";
import { Pages, Resources, Routes } from "@/constants/enums";

interface Props {
  handleDrawer: (value: boolean) => void;
}

const NavMenu: React.FC<Props> = ({ handleDrawer }) => {
  const { push } = useRouter();

  const handleClick = (slug: string) => {
    handleDrawer(false);

    push(`/${Routes.DASHBOARD}/${slug}`);
  };

  return (
    <nav className="main-navigation">
      <List disablePadding>
        <MenuItem
          title={Pages.OVERVIEW}
          icon={<SpeedIcon />}
          handleClick={() => handleClick(Pages.OVERVIEW)}
        />
        <MenuItem
          title={Pages.PRODUCTS}
          icon={<SettingsIcon />}
          handleClick={() => handleClick(Pages.PRODUCTS)}
        />
        <MenuItem
          title={Resources.CATEGORIES}
          icon={<SettingsIcon />}
          handleClick={() => handleClick(Resources.CATEGORIES)}
        />
        <MenuItem
          title={Pages.ORDERS}
          icon={<SettingsIcon />}
          handleClick={() => handleClick(Pages.ORDERS)}
        />
      </List>
    </nav>
  );
};

export default NavMenu;
