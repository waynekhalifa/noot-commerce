import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import NavMenu from "../NavMenu";
import Image from "next/image";
function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        noWrap
        component="a"
        href="/"
        sx={{
          textDecoration: "none",
        }}
      >
        <Image src="/images/logo.png" width={200} height={56} alt="img-logo" />
      </Typography>
      <NavMenu handleDrawer={() => true} />
    </Box>
  );
}

export default Header;
