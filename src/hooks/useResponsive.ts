import { IMediaQuery } from "@/models/app";
import { useMediaQuery, useTheme } from "@mui/material";

export default function useResponsive(props: IMediaQuery): boolean {
  const { query, key, start, end } = props;
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));
  const mediaDown = useMediaQuery(theme.breakpoints.down(key));
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start!, end!));
  const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

  if (query === "up") return mediaUp;
  if (query === "down") return mediaDown;
  if (query === "between") return mediaBetween;
  if (query === "only") return mediaOnly;

  return false;
}
