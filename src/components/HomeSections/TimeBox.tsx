import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OptimizedImg from "../OptimizedImg";

const TimeBox = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingTop: "120px",
        paddingBottom: "30px",
        "@media(max-width:767px)": {
          paddingTop: "0",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
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
            right: "-19%",
          },
          "@media(max-width:991px)": {
            right: "-25%",
          },
          "@media(max-width:767px)": {
            right: "-60%",
            top: "20%",
          },
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
        variant="h4"
        sx={{
          color: "#06B7B7",
          fontSize: "36px",
          fontWeight: "400",
          marginBottom: "20px",
        }}
      >
        You are
      </Typography>
      <Box>
        <OptimizedImg
          src="/images/timeboxIcon.svg"
          width={150}
          height={100}
          alt="noot"
        />
      </Box>
      <Typography
        variant="h4"
        sx={{
          color: "#06B7B7",
          fontSize: "36px",
          fontWeight: "400",
          marginBottom: "20px",
        }}
      >
        minutes
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontSize: "20px",
          letterSpacing: "0.8",
          fontWeight: "400",
        }}
      >
        away from bringing your vision to life
      </Typography>
    </Box>
  );
};

export default TimeBox;
