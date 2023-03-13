import { AppBar, Box, IconButton, Toolbar, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import Logo from "./Logo";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
  elevation?: number;
}

const Header: React.FC<Props> = ({ toggleTheme, elevation }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      elevation={elevation ? elevation : 0}
      color="transparent"
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Toolbar>
        <Logo />
        <Box sx={{ flex: 1 }} />
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="mode"
          onClick={toggleTheme}
        >
          {theme.palette.mode === "light" ? (
            <DarkModeIcon />
          ) : (
            <LightModeIcon />
          )}
        </IconButton>
        <IconButton size="large" edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
