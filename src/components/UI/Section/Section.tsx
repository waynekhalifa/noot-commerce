import Box from "@mui/material/Box";
import React from "react";

interface Props {
  background: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ background, children }) => (
  <Box
    component="section"
    sx={{
      pt: 8,
      backgroundColor: background === "white" ? "common.white" : "transparent",
    }}
  >
    {children}
  </Box>
);

export default Section;
