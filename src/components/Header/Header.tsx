import { AppBar, Box, IconButton, Toolbar, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import Logo from "./Logo";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useTheme();

  return (
    <AppBar position="static" elevation={0} color="transparent">
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
