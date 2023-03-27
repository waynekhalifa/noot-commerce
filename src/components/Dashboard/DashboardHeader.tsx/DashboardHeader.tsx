import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme
} from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";

import { useState } from "react";
import useUpdating from "@/hooks/useUpdating";

import { useRouter } from "next/router";
import { Cookies, Routes } from "@/constants/enums";
import { selectUser } from "@/store/appSlice";
import { useSelector } from "react-redux";
import { deleteCookie } from "cookies-next";
import Logo from "./Logo";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Link from "next/link";
interface IState {
  open: boolean;
  anchorEl: null | HTMLElement;
  language: string;
}

const INITIAL_STATE: IState = {
  open: false,
  anchorEl: null,
  language: "English"
};

const pages = ["My Sites", "My Stores", "Help Center"];

const Header: React.FC = () => {
  const theme = useTheme();
  const user = useSelector(selectUser);
  const [state, setState] = useState(INITIAL_STATE);
  const { push } = useRouter();
  const { open, anchorEl, language } = state;
  const { updating, setUpdating } = useUpdating();
  const menuId = "account-menu";
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => setState({ ...state, anchorEl: null });

  const handleAdminProfile = async () => {
    setState({ ...state, anchorEl: null });

    console.log("handleAdminProfile");
  };

  const handleLogout = () => {
    setState({ ...state, anchorEl: null });
    setUpdating(true);
    deleteCookie(Cookies.ACCESS_TOKEN);
    deleteCookie(Cookies.REFRESH_TOKEN);
    localStorage.removeItem("user");

    console.log("handleLogout");
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setState({ ...state, anchorEl: event.currentTarget });
  };
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNewStore = () => {
    push(`/${Routes.DASHBOARD}/create-store`);
  };

  const handleNewWebsite = () => {
    push(`/${Routes.DASHBOARD}/create-website`);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        ".MuiPaper-root": { borderRadius: 0 },
        ".MuiList-root": { padding: 0 }
      }}
    >
      <MenuItem onClick={handleAdminProfile}>
        <ListItemIcon>
          <ManageAccountsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Profile</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
    </Menu>
  );

  const openUserIcon = Boolean(anchorEl);
  const handleLanguage = () => {
    if (language === "English") setState({ ...state, language: "Arabic" });
    if (language === "Arabic") setState({ ...state, language: "English" });
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setState({ ...state, anchorEl: event.currentTarget });
  };
  const handleClose = () => {
    setState({ ...state, anchorEl: null });
  };
  return (
    <Container>
      <Box
        sx={{
          padding: "0.3rem",
          alignSelf: "center"
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "0.2rem",
            height: "5rem",
            borderRadius: "50px",
            background:
              "linear-gradient(to right, #058e97, #76c95a),linear-gradient(to right, #058e97, #76c95a)"
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: `${
                theme.palette.mode === "light" ? "white" : "#000000"
              }`,
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "space-evenly"
              }}
            >
              {/* ----------------left section---------------- */}

              <Box sx={{ margin: "0px 3rem" }}>
                <Logo />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "space-evenly"
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    disableRipple={true}
                    sx={{
                      "&:hover": {
                        color: "#12948f",
                        background: "transparent"
                      }
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
            {/* ----------------right section---------------- */}
            <Box
              sx={{ margin: "0px 3rem", display: "flex", alignItems: "center" }}
            >
              <Button
                sx={{
                  margin: "0rem 1rem",
                  padding: "0.3rem 1rem",
                  color: "#12948f",
                  border: "2px solid #12948f",
                  borderRadius: "20px",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#12948f"
                  },
                  minWidth: "8rem"
                }}
                onClick={() => handleLanguage()}
              >
                {language}
              </Button>
              <Button
                sx={{
                  margin: "0rem 1rem",
                  padding: "0.3rem 1rem",
                  color: "#12948f",
                  border: "2px solid #12948f",
                  borderRadius: "20px",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#12948f"
                  },
                  minWidth: "8rem"
                }}
                endIcon={<EmojiEventsOutlinedIcon fontSize="small" />}
              >
                Rewards
              </Button>
              <IconButton
                disableRipple={true}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsNoneIcon sx={{ color: "primary.main" }} />
                </Badge>
              </IconButton>
              {/* ----- */}

              {/* <Button
                disableRipple={true}
                sx={{ p: 0, ml: 2 }}
                onClick={handleProfileMenuOpen}
                endIcon={<KeyboardArrowDownIcon fontSize="small" />}
              >
                <Avatar>H</Avatar>
              </Button> */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={openUserIcon ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openUserIcon ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openUserIcon}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0
                    }
                  }
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: `${
                        theme.palette.mode === "light" ? "#000000" : "white"
                      }`
                    }}
                  >
                    <Avatar /> Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: `${
                        theme.palette.mode === "light" ? "#000000" : "white"
                      }`
                    }}
                  >
                    <Avatar /> My account
                  </Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <Link
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: `${
                        theme.palette.mode === "light" ? "#000000" : "white"
                      }`
                    }}
                  >
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: `${
                        theme.palette.mode === "light" ? "#000000" : "white"
                      }`
                    }}
                  >
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: `${
                        theme.palette.mode === "light" ? "#000000" : "white"
                      }`
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            {/* --------------end---------------- */}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;

// <>
//   <AppBar
//     position="static"
//     elevation={2}
//     color="transparent"
//     sx={{
//       backgroundColor: "background.default",
//     }}
//   >
//     <Toolbar>
//       <Logo />
//       <Box sx={{ ml: 2, display: "flex" }}>
//         <Typography sx={{ ml: 2 }}>My Websites</Typography>
//         <Typography sx={{ ml: 2 }}>My Stores</Typography>
//         <Typography sx={{ ml: 2, display: "flex", alignItems: "center" }}>
//           <HelpOutlineOutlinedIcon
//             fontSize="small"
//             sx={{ transform: "scale(.8)" }}
//           />
//           Help Center
//         </Typography>
//       </Box>
//       <Box sx={{ flex: 1 }} />
//       <IconButton
//         size="large"
//         aria-label="show 17 new notifications"
//         color="inherit"
//       >
//         <Badge badgeContent={17} color="error">
//           <NotificationsIcon sx={{ color: "primary.main" }} />
//         </Badge>
//       </IconButton>
// <Box
//   sx={{ display: "flex", alignItems: "center" }}
//   onClick={handleProfileMenuOpen}
// >
//         <Button
//           sx={{ p: 0, ml: 2 }}
//           endIcon={<KeyboardArrowDownIcon fontSize="small" />}
//         >
//           Wani Joseph
//         </Button>
//       </Box>
//     </Toolbar>
//     <Box>{user?.first_name}</Box>
//   </AppBar>
//   {renderMenu}
//   <Box sx={{ py: 4, boxShadow: (theme) => theme.shadows[2] }}>
//     <Container>
//       <Grid container alignItems={"center"}>
//         <Grid item xs={12} md={9} lg={10}>
//           <Typography variant="h4">Manage Online Stores</Typography>
//           <Typography color="text.secondary">
//             Here where you can manage delete, upgrade, or adjust any of your
//             online stores
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={3} lg={2}>
//           <Grid container justifyContent={"flex-end"}>
//             <Button
//               size="large"
//               disableElevation
//               variant="contained"
//               onClick={handleNewStore}
//             >
//               create store
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   </Box>
//   <Container maxWidth="md" sx={{ mt: 4 }}>
//     <Paper sx={{ py: 6 }}>
//       <Typography variant="h6" textAlign="center" gutterBottom>
//         What kind of website do you need?
//       </Typography>
//       <Typography color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
//         create anything, a full multilingual website or an e-commerce store
//       </Typography>
//       <Grid container justifyContent={"space-around"}>
//         <Box
//           sx={{
//             border: "1px solid",
//             borderColor: "divider",
//             width: "46%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//             pb: 5,
//           }}
//         >
//           <Box
//             component="img"
//             src={websiteTemplate.src}
//             alt="noot"
//             sx={{ display: "block", height: "auto", maxWidth: "100%" }}
//           />
//           <Typography variant="h6" textAlign="center" gutterBottom>
//             Online Store
//           </Typography>
//           <Typography
//             color="text.secondary"
//             textAlign="center"
//             sx={{ mb: 2 }}
//           >
//             Add your products and start selling today
//           </Typography>
//           <Button
//             size="large"
//             disableElevation
//             variant="contained"
//             onClick={handleNewStore}
//           >
//             create store
//           </Button>
//         </Box>
//         <Box
//           sx={{
//             border: "1px solid",
//             borderColor: "divider",
//             width: "46%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//             pb: 5,
//           }}
//         >
//           <Box
//             component="img"
//             src={websiteTemplate.src}
//             alt="noot"
//             sx={{ display: "block", height: "auto", maxWidth: "100%" }}
//           />
//           <Typography variant="h6" textAlign="center" gutterBottom>
//             Business Website
//           </Typography>
//           <Typography
//             color="text.secondary"
//             textAlign="center"
//             sx={{ mb: 2 }}
//           >
//             Professional Multi-lingual website for your business
//           </Typography>
//           <Button
//             size="large"
//             disableElevation
//             variant="contained"
//             onClick={handleNewWebsite}
//           >
//             create website
//           </Button>
//         </Box>
//       </Grid>
//     </Paper>
//   </Container>
// </>
