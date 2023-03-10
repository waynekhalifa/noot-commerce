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
      sx={{
        margin: " 0 8px",
        ":hover": {
          backgroundColor: "primary.main",
        },
      }}
    >
      <ListItemText
        primary={title}
        sx={{ textTransform: "capitalize", color: "white" }}
      />
    </ListItemButton>
  );
};

export default MenuItem;
