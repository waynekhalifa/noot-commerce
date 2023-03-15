import { Box, Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const CustomTitle: React.FC<Props> = ({ children }) => {
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
        variant="h5"
        fontWeight={700}
        paragraph
        sx={{
          textAlign: {
            xs: "center",
            md: "start",
            lg: "start"
          },
          color:'#6DC45E'
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default CustomTitle;
