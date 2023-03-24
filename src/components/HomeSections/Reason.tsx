import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import OptimizedImg from "../OptimizedImg";
import Link from "next/link";

const Reason = ({ title, desc, icon }: any) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={3}
      sx={{
        paddingRight: "30px",
        marginBottom: "40px",
        "&:last-child": {
          paddingRight: "0",
        },
        "@media(max-width:767px)": {
          paddingRight: "0",
        },
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor:
            icon === "/images/icons/reasonsIcons/6.svg" ||
            icon === "/images/icons/reasonsIcons/10.svg"
              ? "#6DC45E"
              : "#058E97",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OptimizedImg
          src={icon}
          width={30}
          height={30}
          alt="noot"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Typography
        variant="h4"
        sx={{
          fontSize: "16px",
          color: "#06B7B7",
          fontWeight: "400",
          height: "30px",
          margin: "20px 0",
        }}
      >
        {title}
      </Typography>
      <Typography
        paragraph
        sx={{
          fontSize: "15px",
          // color: "white",
          fontWeight: "400",
          margin: "0",
          paddingBottom: "30px",
          letterSpacing: "0.8px",
        }}
      >
        {desc}
      </Typography>
      <Box
        sx={{
          width: "100%",
          textAlign: "right",
          position: "absolute",
          bottom: "-15px",
          right: "30px",
        }}
      >
        <Link
          href="/learn-more"
          style={{
            textDecoration: "none",
            width: "100%",
            color: "#06B7B7",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Learn More
        </Link>
      </Box>
    </Grid>
  );
};

export default Reason;
