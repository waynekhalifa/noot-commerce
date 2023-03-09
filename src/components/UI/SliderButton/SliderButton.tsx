import Button from "@mui/material/Button";
import { Navigate } from "@/constants/enums";

interface Props {
  icon: JSX.Element;
  navigate: string;
  size: string;
  onClick: any;
}

const SliderButton: React.FC<Props> = ({ navigate, icon, size, onClick }) => (
  <Button
    onClick={onClick}
    variant="contained"
    size="small"
    disableElevation
    sx={{
      display: { xs: "none", md: "block" },
      backgroundColor: "primary.main",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: navigate === Navigate.NEXT ? "auto" : 20,
      right: navigate === Navigate.PREV ? "auto" : 20,
      minWidth: 40,
      height: 40,
      zIndex: "1",
      textAlign: "center",
      fontWeight: "700",
      color: "#fff",
      border: "none",
      lineHeight: 0,
      "&:hover": {
        backgroundColor: "rgba(51, 190, 255, .3)",
      },
    }}
  >
    {icon}
  </Button>
);

export default SliderButton;
