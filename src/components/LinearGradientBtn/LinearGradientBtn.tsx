import { Button } from "@mui/material";

interface Props {
  content: string;
}

const LinearGradientBtn: React.FC<Props> = ({content}) => {
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
      {content}
    </Button>
  );
};

export default LinearGradientBtn;
