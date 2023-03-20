import { FC, memo, Suspense, useState } from "react";
import dynamic from "next/dynamic";
import {
  AppBar,
  Backdrop,
  Box,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Pages, Routes } from "@/constants/enums";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useUpdating from "@/hooks/useUpdating";
import ActionLoader from "../UI/ActionLoader";
import NavMenu from "../NavMenu";
import LangSwitcher from "../UI/LangSwitcher";
import { selectUser } from "@/store/appSlice";
import { IModelName, IResourceName, ISessionUser } from "@/models/app";
import { NextSeo } from "next-seo";

const Overview = dynamic(() => import("./Overview")) as any;
const Listing = dynamic(() => import("./Listing")) as any;

interface Props {
  resourceName: IResourceName;
  singleName: IModelName;
  action?: string;
  id?: string | string[];
}

interface IState {
  open: boolean;
  anchorEl: null | HTMLElement;
}

const INITIAL_STATE: IState = { open: false, anchorEl: null };

const Admin: FC<Props> = ({ resourceName, singleName, action, id }) => {
  const sessionUser: ISessionUser | null = useSelector(selectUser);
  const [state, setState] = useState(INITIAL_STATE);
  const { open, anchorEl } = state;
  const { push } = useRouter();
  const { updating, setUpdating } = useUpdating();
  const menuId = "account-menu";
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => setState({ ...state, anchorEl: null });

  const handleAdminProfile = async () => {
    if (!sessionUser) return;

    setState({ ...state, anchorEl: null });

    push(`/${Routes.DASHBOARD}/${Pages.USERS}/${sessionUser.id}`);
  };

  const handleLogout = () => {
    setState({ ...state, anchorEl: null });
    setUpdating(true);

    push(`/${Routes.AUTH}/${Pages.LOGOUT}`);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setState({ ...state, anchorEl: event.currentTarget });
  };

  const toggleDrawer = () => setState({ ...state, open: !state.open });

  const renderContent = (): React.ReactNode => {
    switch (resourceName) {
      case Pages.OVERVIEW:
        return <Overview />;
      default:
        return (
          <Listing
            key={resourceName}
            resourceName={resourceName}
            singleName={singleName}
            action={action}
            id={id}
          />
        );
    }
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
      <NextSeo title="Dashboard" description="test editing seo Dashboard" />
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          // backgroundColor: "common.white",
          borderBottom: "1px solid",
          borderColor: "divider",
          color: "primary.main"
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flex: 1, ml: 2 }}>
            <Typography variant="h6" component="h1" fontWeight={700}>
              Admin Dashboard
            </Typography>
          </Box>
          <LangSwitcher />
          <Box sx={{ ml: 2, display: { xs: "flex" } }}>
            <IconButton
              color="inherit"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              edge="end"
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Box
        component="main"
        sx={{
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
          px: 2
          // backgroundColor: "grey.100",
        }}
      >
        <Toolbar />
        <Suspense fallback={<ActionLoader position="fixed" />}>
          {renderContent()}
        </Suspense>
      </Box>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer - 1,
          alignItems: "flex-start"
          // backgroundColor: "rgba(225,225,225,0.5)",
        }}
        open={open}
        onClick={toggleDrawer}
      />
      <Drawer
        variant="persistent"
        open={open}
        sx={{ ".MuiDrawer-paper": { width: 240 } }}
      >
        <Toolbar />
        <NavMenu
          handleDrawer={(value) => setState({ ...state, open: value })}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronRightIcon sx={{ color: "primary.main" }} />
          </IconButton>
        </Box>
      </Drawer>
      {updating && <ActionLoader position="fixed" />}
    </>
  );
};

export default memo(Admin);
