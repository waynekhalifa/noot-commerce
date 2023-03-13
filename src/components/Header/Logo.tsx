import { Box } from "@mui/material";

interface Props {}

import logo from "@images/logo.png";
import Link from "../UI/Link";

const Logo: React.FC<Props> = ({}) => {
  return (
    <Link href="/" sx={{ py: 1 }}>
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
