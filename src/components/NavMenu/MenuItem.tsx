import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  handleClick: () => void;
}

const MenuItem: React.FC<Props> = ({ title, handleClick }) => {
  return (
    <ListItemButton
      component="li"
      onClick={handleClick}
      sx={{ borderBottom: "1px solid", borderColor: "divider" }}
    >
      <ListItemText
        primary={title}
        sx={{ pt: "4px", textTransform: "capitalize" }}
      />
    </ListItemButton>
  );
};

export default MenuItem;
