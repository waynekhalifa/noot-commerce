import { FC } from "react";
import Box from "@mui/material/Box";

import ContentLoader from "../ContentLoader";

interface Props {
  position: string;
}

const ActionLoader: FC<Props> = ({ position }) => (
  <Box
    sx={{
      position: position,
      top: 0,
      left: 0,
      zIndex: (theme) => theme.zIndex.drawer + 1,
      background: "rgba(255,255,255,.7)",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <ContentLoader />
  </Box>
);

export default ActionLoader;
