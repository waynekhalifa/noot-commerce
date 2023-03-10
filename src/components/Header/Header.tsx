import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import NavMenu from "../NavMenu";
import Image from "next/image";
import useResponsive from "@/hooks/useResponsive";
import { IMediaQuery } from "@/models/app";
import MobileNavMenu from "../NavMenu/MobileNavMenu";

function Header() {
  const params: IMediaQuery = { query: "up", key: "md" };

  const mdUp = useResponsive(params);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2.5rem 5rem",
        "@media(max-width:767px)": {
          padding: "30px",
        },
      }}
    >
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
      {mdUp && <NavMenu />}
      {!mdUp && <MobileNavMenu />}
    </Box>
  );
}

export default Header;
