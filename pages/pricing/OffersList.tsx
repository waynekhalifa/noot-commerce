import { Stack, Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  text: string;
  status: string;
}
const OfferList: React.FC<Props> = ({ text, status }) => {
  return (
    <Stack flexDirection="row" alignItems="center" sx={{ margin: "0.8rem 0rem" }}>
      <Box
        component="span"
        sx={{
          marginRight: "1rem",
          display: "flex",
          height: "18px",
          width: "18px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          backgroundColor: "#12948f38",
          color: "primary.main"
        }}
        className="mr-3 flex h-[18px] w-full max-w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary"
      >
        {status === "active" ? (
          <CheckIcon fontSize="small" />
        ) : (
          <CloseIcon fontSize="small" />
        )}
      </Box>
      <Typography variant="subtitle1" >
        {text}
      </Typography>
    </Stack>
  );
};

export default OfferList;
