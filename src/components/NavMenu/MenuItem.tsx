import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  handleClick: () => void;
}

const MenuItem: React.FC<Props> = ({ title, handleClick }) => {
  return (
    <ListItemButton component="li" onClick={handleClick}>
      <ListItemText
        primary={title}
        sx={{ textTransform: "capitalize", color: "white" }}
      />
    </ListItemButton>
  );
};

export default MenuItem;
