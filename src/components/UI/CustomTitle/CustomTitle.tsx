import { Box, Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const CustomTitle: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{ backgroundColor: "primary.main", width: 80, height: 4, mb: 2 }}
      />
      <Typography
        variant="h5"
        fontWeight={700}
        paragraph
        sx={{ color: "secondary.main" }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default CustomTitle;
