import { Box, Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const CenterTitle: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        mb: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: {
          xs: "center",
          md: "start",
          lg: "start"
        },
        justifyContent: {
          xs: "center",
          md: "start",
          lg: "start"
        }
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: 80,
          height: 4,
          mb: 2,
          textAlign: {
            xs: "center",
            md: "start",
            lg: "start"
          }
        }}
      />
      <Typography
        fontWeight={700}
        paragraph
        sx={{
          textAlign: {
            xs: "center",
            md: "start",
            lg: "start"
          },
          color: "#6DC45E",
          fontSize: {
            xs: "2rem",
            md: "3rem",
            lg: "3rem"
          },
          lineHeight: "1.1"
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default CenterTitle;
