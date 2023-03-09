import { Box, Typography } from "@mui/material";

interface Props {
  text: string;
  number: number;
  color: string;
  icon: React.ReactNode;
}

const Stat: React.FC<Props> = ({ text, number, color, icon }) => {
  return (
    <Box
      sx={{
        background: color,
        p: 2,
        color: "common.white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        mb: 2,
      }}
    >
      <Box>
        <Typography sx={{ textTransform: "capitalize" }} variant="h6" paragraph>
          {text}
        </Typography>
        <Typography variant="h4">{number}</Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "common.white",
          color: color,
          p: 1,
          lineHeight: 0,
        }}
      >
        {icon}
      </Box>
    </Box>
  );
};

export default Stat;
