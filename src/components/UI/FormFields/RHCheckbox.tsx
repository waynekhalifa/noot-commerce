import { Controller } from "react-hook-form";
import { Box, Checkbox, Typography } from "@mui/material";
import { IFormField } from "@/models/app";

interface Props extends IFormField {
  errors: any;
  control: any;
}

const RHCheckbox: React.FC<Props> = ({ label, name, disabled, control }) => {
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
            <Checkbox
              sx={{ marginLeft: "-11px" }}
              {...field}
              defaultChecked={field.value}
              disabled={disabled}
            />
          )}
        />
      </Box>
    </>
  );
};

export default RHCheckbox;
