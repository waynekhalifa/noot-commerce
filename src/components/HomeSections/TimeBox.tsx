import { Box, Typography } from "@mui/material";
import OptimizedImg from "../OptimizedImg";

const TimeBox = () => {
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
      }}
    >
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
