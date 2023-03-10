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
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Pages, Routes } from "@/constants/enums";
import ContentLoader from "../UI/ContentLoader";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectSession } from "@/store/appSlice";
import useUpdating from "@/hooks/useUpdating";
import ActionLoader from "../UI/ActionLoader";
import NavMenu from "../NavMenu";
import Listing from "./Listing";

const Overview = dynamic(() => import("./Overview")) as any;

interface Props {
  slug: string;
}

interface IState {
  open: boolean;
  anchorEl: null | HTMLElement;
}

const INITIAL_STATE: IState = { open: false, anchorEl: null };

const Admin: FC<Props> = ({ slug }) => {
  const session: any = useSelector(selectSession);
  const [state, setState] = useState(INITIAL_STATE);
  const { open, anchorEl } = state;
  const { push } = useRouter();
  const { updating, setUpdating } = useUpdating();
  const menuId = "account-menu";
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => setState({ ...state, anchorEl: null });

  const handleAdminProfile = async () => {
    setState({ ...state, anchorEl: null });

    push(`/${Routes.ADMIN}/${Pages.USERS}/${session.id}`);
  };

  const handleLogout = () => {
    setState({ ...state, anchorEl: null });
    setUpdating(true);

    push(`/${Routes.ACCOUNTS}/${Pages.LOGOUT}`);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setState({ ...state, anchorEl: event.currentTarget });
  };

  const toggleDrawer = () => setState({ ...state, open: !state.open });

  const renderContent = (): React.ReactNode => {
    switch (slug) {
      case Pages.OVERVIEW:
        return <Overview />;
      default:
        return <Listing slug={slug} />;
    }
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{
        ".MuiPaper-root": { borderRadius: 0 },
        ".MuiList-root": { padding: 0 },
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
        position="absolute"
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "common.white",
          borderBottom: "1px solid",
          borderColor: "divider",
          color: "primary.main",
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
          <Box sx={{ flex: 1, ml: 2, pt: 1 }}>
            <Typography variant="h6" component="h1" fontWeight={700}>
              Multi Sites
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "flex" } }}>
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
          px: 2,
          backgroundColor: "grey.100",
        }}
      >
        <Toolbar />
        <Suspense fallback={<ContentLoader />}>{renderContent()}</Suspense>
      </Box>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer - 1,
          alignItems: "flex-start",
          backgroundColor: "rgba(225,225,225,0.5)",
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
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
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
