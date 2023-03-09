import { Button, Link } from "@mui/material";

interface Props {
  display: string;
  color: string;
  hoverColor: string;
  linkText: string;
  linkSlug: string;
  end?: React.ReactNode;
  start?: React.ReactNode;
  disableMargin?: boolean;
  onClick?: any;
}

const IconLink: React.FC<Props> = ({
  display,
  color,
  hoverColor,
  linkText,
  linkSlug,
  end,
  start,
  disableMargin,
  onClick,
}) => {
  return (
    <Button
      component="li"
      disableRipple
      sx={{
        display: display,
        p: 0,
        textTransform: "none",
        fontWeight: 400,
        color: color,
        justifyContent: "flex-start",
        marginBottom: { xs: disableMargin ? 0 : "12px", md: "12px" },
        "&:hover": {
          background: "transparent",
          color: hoverColor,
          a: { hoverColor },
        },
        "& .MuiButton-startIcon": { marginRight: "4px" },
        a: { fontSize: 16, color: "inherit", textDecoration: "none" },
      }}
      endIcon={end}
      startIcon={start}
      onClick={(event: any) => {
        if (onClick) {
          event.preventDefault();
          onClick();
        }
      }}
    >
      <Link href={linkSlug}>{linkText}</Link>
    </Button>
  );
};

export default IconLink;
