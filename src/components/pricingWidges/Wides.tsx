import { Box } from "@mui/material";

const Wides = ({ widge }: any) => {
  return (
    <Box
      sx={{
        background: "red",
        flexBasis: "calc(100% / 4 - 80px)",
        margin: "0 15px",
      }}
    >
      text
    </Box>
  );
};

export default Wides;
