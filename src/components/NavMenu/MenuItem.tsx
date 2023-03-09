import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  icon: React.ReactNode;
  handleClick: () => void;
}

const MenuItem: React.FC<Props> = ({ title, icon, handleClick }) => {
  return (
    <ListItemButton
      component="li"
      onClick={handleClick}
      sx={{ borderBottom: "1px solid", borderColor: "divider" }}
    >
      <ListItemIcon sx={{ minWidth: 40 }}>{icon}</ListItemIcon>
      <ListItemText
        primary={title}
        sx={{ pt: "4px", textTransform: "capitalize" }}
      />
    </ListItemButton>
  );
};

export default MenuItem;
