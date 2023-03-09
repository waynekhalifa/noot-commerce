import { FC } from "react";
import TextField from "@mui/material/TextField";

interface Props {
  name: string;
  label: string;
  type: string;
  autoFocus: boolean;
  defaultValue: any;
  register: any;
  errors: any;
}

const FormField: FC<Props> = ({
  name,
  label,
  type,
  autoFocus,
  defaultValue,
  register,
  errors,
}) => {
  const renderField = () => {
    switch (type) {
      case "textField":
        return (
          <TextField
            fullWidth
            size="small"
            margin="normal"
            label={label}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            {...register(name)}
            error={errors[name] ? true : false}
            helperText={errors[name]?.message}
          />
        );
      case "password":
        return (
          <TextField
            fullWidth
            size="small"
            type="password"
            margin="normal"
            label={label}
            autoFocus={autoFocus}
            defaultValue={defaultValue}
            {...register(name)}
            error={errors[name] ? true : false}
            helperText={errors[name]?.message}
          />
        );
      case "number":
        return (
          <TextField
            fullWidth
            size="small"
            type="number"
            margin="normal"
            label={label}
            defaultValue={defaultValue}
            {...register(name)}
            error={errors[name] ? true : false}
            helperText={errors[name]?.message}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderField()}</>;
};

export default FormField;
