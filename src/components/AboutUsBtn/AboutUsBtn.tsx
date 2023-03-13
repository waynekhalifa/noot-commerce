import { Button } from "@mui/material";

interface Props {}

const AboutUsBtn: React.FC<Props> = ({}) => {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        minWidth: 72,
        background:
          "linear-gradient(-90deg, \nrgba(124,28,128,0.66 ) 0.00%, \n#ff6057 100.00%)",
      }}
    >
      About Us
    </Button>
  );
};

export default AboutUsBtn;
