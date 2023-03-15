import { Box } from "@mui/material";

import logo from "@images/logo.png";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Box
        component="img"
        src={logo.src}
        alt="noot"
        sx={{ display: "block", maxHeight: 48, width: "auto" }}
      />
    </Link>
  );
};

export default Logo;
