import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
  Typography
} from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { useState } from "react";
import useUpdating from "@/hooks/useUpdating";

import websiteTemplate from "@images/website-template.png";
import { useRouter } from "next/router";
import { Pages, Routes } from "@/constants/enums";
import { selectUser } from "@/store/appSlice";
import { useSelector } from "react-redux";
import Logo from "../Header/Logo";

interface IState {
  open: boolean;
  anchorEl: null | HTMLElement;
}

const INITIAL_STATE: IState = { open: false, anchorEl: null };

const Header: React.FC = () => {
  const user = useSelector(selectUser);
  const [state, setState] = useState(INITIAL_STATE);
  const { push } = useRouter();
  const { open, anchorEl } = state;
  const { updating, setUpdating } = useUpdating();
  const menuId = "account-menu";
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => setState({ ...state, anchorEl: null });

  const handleAdminProfile = async () => {
    setState({ ...state, anchorEl: null });
  };

  const handleLogout = () => {
    setState({ ...state, anchorEl: null });
    setUpdating(true);

    push(`/${Routes.AUTH}/${Pages.LOGOUT}`);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setState({ ...state, anchorEl: event.currentTarget });
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

  return (
    <>
      <AppBar
        position="static"
        elevation={2}
        color="transparent"
        sx={{
          backgroundColor: "background.default"
        }}
      >
        <Toolbar>
          <Logo />
          <Box sx={{ ml: 2, display: "flex" }}>
            <Typography sx={{ ml: 2 }}>My Websites</Typography>
            <Typography sx={{ ml: 2 }}>My Stores</Typography>
            <Typography sx={{ ml: 2, display: "flex", alignItems: "center" }}>
              <HelpOutlineOutlinedIcon
                fontSize="small"
                sx={{ transform: "scale(.8)" }}
              />
              Help Center
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }} />
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon sx={{ color: "primary.main" }} />
            </Badge>
          </IconButton>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            onClick={handleProfileMenuOpen}
          >
            <Button
              sx={{ p: 0, ml: 2 }}
              endIcon={<KeyboardArrowDownIcon fontSize="small" />}
            >
              {user?.first_name} {user?.last_name}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Box sx={{ py: 4, boxShadow: (theme) => theme.shadows[2] }}>
        <Container>
          <Grid container alignItems={"center"}>
            <Grid item xs={12} md={9} lg={10}>
              <Typography variant="h4">Manage Online Stores</Typography>
              <Typography color="text.secondary">
                Here where you can manage delete, upgrade, or adjust any of your
                online stores
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <Grid container justifyContent={"flex-end"}>
                <Button
                  size="large"
                  disableElevation
                  variant="contained"
                  onClick={handleNewStore}
                >
                  create store
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper sx={{ py: 6 }}>
          <Typography variant="h6" textAlign="center" gutterBottom>
            What kind of website do you need?
          </Typography>
          <Typography color="text.secondary" textAlign="center" sx={{ mb: 6 }}>
            create anything, a full multilingual website or an e-commerce store
          </Typography>
          <Grid container justifyContent={"space-around"}>
            <Box
              sx={{
                border: "1px solid",
                borderColor: "divider",
                width: "46%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                pb: 5
              }}
            >
              <Box
                component="img"
                src={websiteTemplate.src}
                alt="noot"
                sx={{ display: "block", height: "auto", maxWidth: "100%" }}
              />
              <Typography variant="h6" textAlign="center" gutterBottom>
                Online Store
              </Typography>
              <Typography
                color="text.secondary"
                textAlign="center"
                sx={{ mb: 2 }}
              >
                Add your products and start selling today
              </Typography>
              <Button
                size="large"
                disableElevation
                variant="contained"
                onClick={handleNewStore}
              >
                create store
              </Button>
            </Box>
            <Box
              sx={{
                border: "1px solid",
                borderColor: "divider",
                width: "46%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                pb: 5
              }}
            >
              <Box
                component="img"
                src={websiteTemplate.src}
                alt="noot"
                sx={{ display: "block", height: "auto", maxWidth: "100%" }}
              />
              <Typography variant="h6" textAlign="center" gutterBottom>
                Business Website
              </Typography>
              <Typography
                color="text.secondary"
                textAlign="center"
                sx={{ mb: 2 }}
              >
                Professional Multi-lingual website for your business
              </Typography>
              <Button
                size="large"
                disableElevation
                variant="contained"
                onClick={handleNewWebsite}
              >
                create website
              </Button>
            </Box>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Header;
