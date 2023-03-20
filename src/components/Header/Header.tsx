import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from "./Logo";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";
import { Pages, Routes } from "@/constants/enums";

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

const pages = [
  { name: "PRODUCTS", familiarName: "/products" },
  { name: "TEMPLATES", familiarName: "/templates" },
  { name: "RESOURCES", familiarName: "/resources" },
  { name: "PRICING", familiarName: "/pricing" }
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
  openBurgerNav: () => void;
  closeBurgerNav: () => void;
  burger: boolean;
}
const Header: React.FC<Props> = ({
  toggleTheme,
  openBurgerNav,
  closeBurgerNav,
  burger
}) => {
  const theme = useTheme();
  const router = useRouter();
  const { push } = router;
  const { pathname } = router;
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
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : "#121212"
              }`
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
                  marginLeft: "0.75rem",
                  cursor: "pointer"
                }}
                onClick={closeBurgerNav}
              />
            </Box>
            <Box sx={{ padding: "2rem", width: "fit-content" }}>
              <motion.ul variants={list} animate="hidden">
                {pages.map((page) => (
                  <motion.li
                    initial="hidden"
                    variants={item}
                    key={page.name}
                    onClick={() => {
                      push(`${page.familiarName}`);
                    }}
                    style={{
                      listStyle: "none",
                      fontSize: "1.6rem",
                      font: "San Francisco, Helvetica, Arial, san-serif",
                      fontWeight: "600",
                      paddingBottom: "0.5rem",
                      width: "fit-content"
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        justifyContent: "center",
                        flexDirection: "column"
                      }}
                    >
                      {page.name}
                      <Box
                        component="span"
                        sx={{
                          width: `${
                            page.familiarName === `${pathname}` ? "100%" : "0%"
                          }`,
                          height: "2px",
                          backgroundColor: "#06B7B7",
                          borderRadius: "10px"
                        }}
                      />
                    </Box>
                  </motion.li>
                ))}
              </motion.ul>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      <nav
        style={{
          backgroundColor: `${
            theme.palette.mode === "light" ? "white" : "#121212"
          }`,
          boxShadow: `${
            theme.palette.mode === "light"
              ? " 0px 1px 10px rgb(6 183 183 / 32%)"
              : " 0px 1px 10px rgba(15, 211, 146, 0.2)"
          }`,
          // ' 0px 5px 10px rgba(4, 10, 34, 0.2)',
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
              <MenuIcon onClick={openBurgerNav} sx={{ cursor: "pointer" }} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  disableElevation
                  disableRipple
                  key={page.name}
                  onClick={() => {
                    push(`${page.familiarName}`);
                  }}
                  sx={{
                    my: 2,
                    display: "block",
                    fontSize: "1.1rem",
                    "&:hover": {
                      background: "none"
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "center",
                      flexDirection: "column"
                    }}
                  >
                    {page.name}
                    <Box
                      component="span"
                      sx={{
                        width: `${
                          page.familiarName === `${pathname}` ? "100%" : "0%"
                        }`,
                        height: "2px",
                        backgroundColor: "#06B7B7",
                        borderRadius: "10px"
                      }}
                    />
                  </Box>
                </Button>
              ))}
            </Box>
            <Link
              href={`/${Routes.DASHBOARD}/${Pages.OVERVIEW}`}
              style={{ textDecoration: "none" }}
            >
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

export default Header;
