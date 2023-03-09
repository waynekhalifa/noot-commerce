import { Controller } from "react-hook-form";
import { Box, TextField, Typography } from "@mui/material";
import { IFormField } from "@/models/app";

interface Props extends IFormField {
  errors: any;
  control: any;
}

const RHTextField: React.FC<Props> = ({
  label,
  name,
  type,
  placeholder,
  disabled,
  autoFocus,
  control,
  errors,
}) => {
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
            <TextField
              fullWidth
              size="small"
              {...field}
              type={type}
              disabled={disabled}
              autoFocus={autoFocus}
              placeholder={placeholder}
              error={!!errors[name]}
              helperText={errors[name] && `${errors[name].message}`}
            />
          )}
        />
      </Box>
    </>
  );
};

export default RHTextField;
