import { Controller } from "react-hook-form";
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { IFormField } from "@/models/app";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

interface Props extends IFormField {
  errors: any;
  control: any;
}

interface IState {
  showPassword: boolean;
}

const INITIAL_STATE: IState = { showPassword: false };

const RHTextField: React.FC<Props> = ({
  label,
  name,
  placeholder,
  disabled,
  autoFocus,
  control,
  errors,
}) => {
  const [state, setState] = useState(INITIAL_STATE);
  const { showPassword } = state;
  const handleClickShowPassword = () =>
    setState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Typography component="label" htmlFor={`${name}`}>
        {label}
      </Typography>
      <Box sx={{ position: "relative", minHeight: 64 }}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <OutlinedInput
              fullWidth
              size="small"
              {...field}
              disabled={disabled}
              autoFocus={autoFocus}
              placeholder={placeholder}
              error={!!errors[name]}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          )}
        />
      </Box>
    </>
  );
};

export default RHTextField;
