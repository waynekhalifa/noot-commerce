import { useRouter } from "next/router";
import { List } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";

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
      <List disablePadding>
        <MenuItem
          title={Pages.OVERVIEW}
          icon={<SpeedIcon />}
          handleClick={() => handleClick(Pages.OVERVIEW)}
        />
        <MenuItem
          title={Pages.FEATURES}
          icon={<SettingsIcon />}
          handleClick={() => handleClick(Pages.FEATURES)}
        />
      </List>
    </nav>
  );
};

export default NavMenu;
