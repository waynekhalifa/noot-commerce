import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material";
import Link from "next/link";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useState } from "react";
import Logo from "../Header/Logo";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    height: "0vh",
    transition: {
      staggerChildren: 1.3,
      duration: 0.4
    }
    // transitionEnd: { display: "none" }
  },
  show: {
    opacity: 1,
    height: "100vh",
    transition: {
      staggerChildren: 1.3,
      duration: 0.6
    }
  }
};
const list = {
  show: {
    opacity: 1,
    transition: { when: "afterChildren" }
  },
  hide: {
    opacity: 0,
    transition: { when: "afterChildren" }
  }
};
const item = {
  show: {
    opacity: 1,
    transition: { when: "afterChildren" }
  },
  hide: {
    opacity: 0,
    transition: { duration: 0.6 }
  }
};

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
  elevation?: number;
  openBurgerNav: () => void;
  closeBurgerNav: () => void;
  burger: boolean;
}
const NewHeader: React.FC<Props> = ({
  toggleTheme,
  elevation,
  openBurgerNav,
  closeBurgerNav,
  burger
}) => {
  const theme = useTheme();
  const [showNav, setShowNav] = useState<boolean>(false);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setShowNav(true);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setShowNav(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ position: "absolute", zIndex: "9999", minWidth: "100vw" }}>
      <AnimatePresence mode="wait">
        {burger && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{
              width: "100%",
              // position: "absolute",
              // height: `${showNav ? "100vh" : "0"}`,
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : "#161617"
              }`
              // bottom: "100%",
              // left: 0,
              // right: 0,
              // transition: " 1.5s ease"
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "3rem"
              }}
            >
              <CloseIcon
                sx={{
                  fontWeight: "200",
                  marginTop: "1rem",
                  marginLeft: "0.75rem"
                }}
                onClick={closeBurgerNav}
              />
            </Box>
            <Box sx={{ padding: "2rem" }}>
              {pages.map((page) => (
                <motion.ul
                  variants={list}
                  animate="hidden"
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <motion.li
                    initial="hidden"
                    variants={item}
                    style={{
                      listStyle: "none",
                      fontSize: "1.6rem",
                      font: "San Francisco, Helvetica, Arial, san-serif",
                      fontWeight: "600"
                    }}
                  >
                    {page}
                  </motion.li>
                </motion.ul>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      <nav
        style={{
          backgroundColor: `${
            theme.palette.mode === "light" ? "white" : "#161617cc"
          }`,
          display: `${burger ? "none" : "block"}`,
          position: "fixed",
          top: "0",
          height: "4rem",
          width: "100%",
          zIndex: 100,
          backdropFilter: "saturate(180%) blur(20px)"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "transparent",
                textDecoration: "none"
              }}
            >
              <Logo />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                edge="start"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={openBurgerNav}
              >
                <MenuIcon />
              </IconButton>
              {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            ></Menu> */}
              {/* {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                          <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                      ))} */}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block", fontSize: "1.1rem" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Link href="/dashboard/overview" style={{ textDecoration: "none" }}>
              <button
                style={{
                  width: "10rem",
                  height: "40px",
                  backgroundColor: "#06B7B7",
                  border: "none",
                  borderRadius: "25px",
                  fontSize: "16px",
                  color: "white",
                  fontWeight: "400",
                  cursor: "pointer",
                  textDecoration: "none"
                }}
              >
                GET STARTED
              </button>
            </Link>
            <IconButton
              size="large"
              edge="end"
              aria-label="mode"
              onClick={toggleTheme}
            >
              {theme.palette.mode === "light" ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>
          </Toolbar>
        </Container>
      </nav>
    </Box>
  );
};

export default NewHeader;
