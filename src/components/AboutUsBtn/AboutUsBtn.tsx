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
          "linear-gradient(-90deg, \n#76C95A 0.00%, \n#058E97  100.00%)",
        borderRadius: "25px"
      }}
    >
      About Us
    </Button>
  );
};

export default AboutUsBtn;
