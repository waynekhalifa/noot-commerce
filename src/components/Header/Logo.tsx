import { Box } from "@mui/material";

interface Props {}

import logo from "@images/logo.png";
import Link from "next/link";

const Logo: React.FC<Props> = ({}) => {
  return (
    <Link href="/" legacyBehavior>
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
