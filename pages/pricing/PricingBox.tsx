import { Box, Button, Typography ,   useTheme
} from "@mui/material";

interface Props {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: any;
}

const PricingBox: React.FC<Props> = ({
  price,
  duration,
  packageName,
  subtitle,
  children
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          // background: "#26262e",
          backgroundColor: `${
            theme.palette.mode === "light" ? "white" : "#26262e"
          }`,
          boxShadow: ' 0px 5px 10px rgba(4, 10, 34, 0.2)',
          padding: "2rem 1.5rem",
          borderRadius: "10px"
        }}
        data-wow-delay=".1s"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              fontSize: "1.875rem",
              fontWeight: "700",
              lineHeight: "2.25rem",
              marginBottom: "0.5rem"
            }}
          >
            $
            <Box component="span" sx={{ opacity: "1" }} className="amount">
              {price}
            </Box>
            <Box
              component="span"
              sx={{ opacity: "0.4" }}
              className="time text-body-color"
            >
              /{duration}
            </Box>
          </Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "1.25rem",
              lineHeight: "1.75rem"
            }}
          >
            {packageName}
          </Typography>
        </Box>
        <p>{subtitle}</p>
        <Box>
          <Button sx={{ width: "100%", background: "#4A6CF7", color: "white" }}>
            Start Free Trial
          </Button>
        </Box>
        <Box sx={{width:'100%', height:'1.5px', backgroundColor:'gray', marginTop:'1.5rem', marginBottom:'1rem'}} />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default PricingBox;
