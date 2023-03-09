import { FC } from "react";
import { Box, CircularProgress } from "@mui/material";

const ContentLoader: FC = (): JSX.Element => (
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <CircularProgress size={64} thickness={1} />
  </Box>
);

export default ContentLoader;
