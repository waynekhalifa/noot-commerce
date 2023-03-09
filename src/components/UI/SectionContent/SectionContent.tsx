import { Typography } from "@mui/material";

interface Props {
  text: string;
  align?: "left" | "center" | "right";
}

const SectionContent: React.FC<Props> = ({ text, align }) => (
  <Typography
    component="p"
    color="textSecondary"
    align={align ? align : "left"}
    sx={{ lineHeight: 1.7, mb: 4 }}
  >
    {text}
  </Typography>
);

export default SectionContent;
