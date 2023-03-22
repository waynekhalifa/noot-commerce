import { Box } from "@mui/material";

const ThreeDots = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          margin: "0 5px",
          borderRadius: "50%",
          width: "8px",
          height: "8px",
          backgroundColor: "#6DC45E",
        }}
      ></Box>
      <Box
        sx={{
          margin: "0 5px",
          borderRadius: "50%",
          width: "8px",
          height: "8px",
          backgroundColor: "#8F8F8F",
        }}
      ></Box>
      <Box
        sx={{
          margin: "0 5px",
          borderRadius: "50%",
          width: "8px",
          height: "8px",
          backgroundColor: "#8F8F8F",
        }}
      ></Box>
    </Box>
  );
};

export default ThreeDots;
