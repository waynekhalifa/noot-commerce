import { FC } from "react";
import { CircularProgress } from "@mui/material";

interface Props {
  size?: number;
  color?: string;
}

const ButtonLoader: FC<Props> = ({ size, color }): JSX.Element => (
  <CircularProgress
    size={size ? size : 24}
    thickness={1}
    sx={{ ml: 1, color: color ? color : "grey.500" }}
  />
);

export default ButtonLoader;
