import { useSelector } from "react-redux";

import { ISnackBar } from "@/models/app";
import { selectSnackbar } from "@/store/appSlice";
import useApp from "@/hooks/useApp";
import { Alert, Snackbar } from "@mui/material";

const MainSnackbar: React.FC = () => {
  const snackbar: ISnackBar = useSelector(selectSnackbar);
  const { open, severity, content, persist } = snackbar;
  const { changeSnackbar } = useApp();

  const handleClose = (): void => {
    const snackbar: ISnackBar = {
      open: false,
      severity: "info",
      content: null,
      persist: false,
    };

    changeSnackbar(snackbar);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      autoHideDuration={persist ? null : severity === "success" ? 3000 : 6000}
      open={open}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        elevation={6}
        variant="filled"
        severity={severity}
        sx={{ width: "100%" }}
      >
        {content}
      </Alert>
    </Snackbar>
  );
};

export default MainSnackbar;
