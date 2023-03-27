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
        // padding: "0.5rem 1.5rem",
        marginBottom: {
          lg: "40px",
          md: "40px",
          xs: "0px"
        },
        "&:last-child": {
          paddingRight: "0"
        },
        "@media(max-width:767px)": {
          paddingRight: "0"
        },
        position: "relative"
      }}
    >
      <Box
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "90%",
            xl: "90%"
          },
          padding: "0.5rem 1.5rem"
        }}
      >
        <Box
          sx={{
            width: "5rem",
            height: "5rem",
            borderRadius: "50%",
            backgroundColor:
              icon === "/images/icons/reasonsIcons/6.svg" ||
              icon === "/images/icons/reasonsIcons/10.svg" ||
              icon === "/images/icons/reasonsIcons/2.svg"
                ? "#6DC45E"
                : "#058E97",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <OptimizedImg
            src={icon}
            width={40}
            height={40}
            alt="noot"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontSize: "1.2rem",
            color: "#06B7B7",
            fontWeight: "500",
            lineHeight: "1.2",
            width: "90%",
            margin: "20px 0"
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
            letterSpacing: "0.8px"
          }}
        >
          {desc}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            paddingRight: {
              lg: "1rem",
              md: "1rem",
              xs: "1rem"
            }
            // width: "max-content",
            // textAlign: "right",
            // position: "absolute",
            // bottom: "-15px",
            // right: "30px"
          }}
        >
          <Link
            href="/learn-more"
            style={{
              textDecoration: "none",
              color: "#06B7B7",
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            Learn More
          </Link>
        </Box>
      </Box>
    </Grid>
  );
};

export default Reason;
