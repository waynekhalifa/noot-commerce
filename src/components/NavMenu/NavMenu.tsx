import { useRouter } from "next/router";
import { List } from "@mui/material";

import MenuItem from "./MenuItem";
import { Pages, Routes } from "@/constants/enums";
import { Box } from "@mui/system";

const NavMenu: React.FC = () => {
  const { push } = useRouter();

  const handleClick = (slug: string) => {
    push(`/${Routes.ADMIN}/${slug}`);
  };

  return (
    <Box component={"nav"}>
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
    </Box>
  );
};

export default NavMenu;
