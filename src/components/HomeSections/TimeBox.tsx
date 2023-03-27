import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OptimizedImg from "../OptimizedImg";

const TimeBox = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingTop: {
          xs: "2rem",
          md: "0",
          lg: "0"
        },
        paddingBottom: "30px",
        "@media(max-width:767px)": {
          paddingTop: "0"
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "35%",
          right: "-12%",
          overflow: "hidden",
          zIndex: "-1",
          "@media(max-width:1200px)": {
            right: "-19%"
          },
          "@media(max-width:991px)": {
            right: "-25%"
          },
          "@media(max-width:767px)": {
            right: "-76%",
            top: "20%"
          }
        }}
      >
        <OptimizedImg
          src="/images/landEffects/effect1.svg"
          alt="noot"
          width={400}
          height={300}
          style={{ objectFit: "contain", maxWidth: "100%" }}
        />
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: "#06B7B7",
          fontWeight: "400",
          fontSize: {
            xs: "3rem",
            md: "3rem",
            lg: "3.75rem"
          }
        }}
      >
        You are
      </Typography>
      <Box
        sx={{
          width: "11rem",
          height: "11rem",
          background:
            "linear-gradient(109deg, #058e97 10.41%, #76c95a 100.00%)",
          border:
            "1.5rem solid linear-gradient(109deg, #058e97 10.41%, #76c95a 100.00%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.primary.main,
          margin: "20px 0px"
        }}
      >
        <Box
          sx={{
            width: "8rem",
            height: "8rem",
            backgroundColor:
              theme.palette.mode === "light" ? "white" : "#000000",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography sx={{ fontSize: "7.5rem", fontWeight: "700" }}>
            3
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: "#06B7B7",
          fontWeight: "400",
          fontSize: {
            xs: "3rem",
            md: "3rem",
            lg: "3.75rem"
          }
        }}
      >
        minutes
      </Typography>
      <Typography
        variant="h3"
        pt={2}
        sx={{
          fontSize: {
            lg: "3rem",
            md: "1.5rem",
            xs: "1.2rem"
          }
          // letterSpacing: "0.8",
          // fontWeight: "400"
        }}
      >
        away from bringing your vision to life
      </Typography>
    </Box>
  );
};

export default TimeBox;
