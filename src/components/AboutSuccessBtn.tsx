import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface Props {}

const AboutSuccessBtn: React.FC<Props> = ({}) => {
  return (
    <Button
      size="large"
      sx={{ p: 0, textTransform: "initial", fontSize: "1.15rem" }}
      endIcon={
        <ArrowRightAltIcon fontSize="large" sx={{ transform: "scale(1.5)" }} />
      }
    >
      Learn about our success
    </Button>
  );
};

export default AboutSuccessBtn;
