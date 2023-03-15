import { Box } from "@mui/material";

import logo from "@images/logo.png";

const Logo: React.FC = () => {
  return (
    <Box
      component="img"
      src={logo.src}
      alt="noot"
      sx={{ display: "block", maxHeight: 48, width: "auto" }}
    />
  );
};

export default Logo;
