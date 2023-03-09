import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface Props {
  label: string;
  children: JSX.Element;
  button?: string;
  icon?: any;
  onClick?: any;
}

const FormSection: React.FC<Props> = ({
  label,
  children,
  button,
  icon,
  onClick,
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? "rgba(255, 255, 255, .05)"
              : "rgba(0, 0, 0, .03)",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderBottom: "none",
          padding: "8px 16px",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">{label}</Typography>
        {button && (
          <Button
            variant="outlined"
            size="small"
            startIcon={icon ? icon : null}
            onClick={onClick}
          >
            {button}
          </Button>
        )}
      </Box>
      <Paper elevation={0}>{children}</Paper>
    </Box>
  );
};

export default FormSection;
