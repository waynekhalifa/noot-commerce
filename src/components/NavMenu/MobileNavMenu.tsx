import { useRouter } from "next/router";
import { List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "./MenuItem";
import { Pages, Routes } from "@/constants/enums";
import Box from "@mui/material/Box";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function MobileNavMenu() {
  const [open, setOpen] = useState(false);

  const { push } = useRouter();

  const handleClick = (slug: string) => {
    push(`/${Routes.ADMIN}/${slug}`);
    setOpen(false);
  };
  const handleNavMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      {open ? (
        <CloseIcon
          sx={{
            color: "white",
            position: "relative",
            zIndex: 100,
            width: "35px",
            height: "35px",
            cursor: "pointer",
            transition: "color 0.3s ease",
            ":hover": {
              color: "primary.main",
            },
          }}
          onClick={handleNavMenu}
        />
      ) : (
        <MenuIcon
          sx={{
            color: "white",
            position: "relative",
            zIndex: 100,
            width: "35px",
            height: "35px",
            cursor: "pointer",
            transition: "color 0.3s ease",
            ":hover": {
              color: "primary.main",
            },
          }}
          onClick={handleNavMenu}
        />
      )}
      <Box
        component="nav"
        className="main-navigation"
        sx={{
          position: "absolute",
          top: "0",
          left: open ? "0%" : "-100%",
          width: "100%",
          height: "100vh",
          backgroundColor: "#555555",
          zIndex: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 0.3s ease",
          ul: {
            flexDirection: "column",
          },
          li: {
            ":last-child": {
              margin: "20px auto",
            },
            margin: "20px auto",
          },
        }}
      >
        <List disablePadding sx={{ display: "flex", alignItems: "center" }}>
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
    </>
  );
}

export default MobileNavMenu;
