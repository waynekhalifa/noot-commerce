import { Checkbox, Grid, Typography } from "@mui/material";
import FormSection from "../FormSection";
import LightBox from "../LightBox";

interface Props {
  label: string;
  name: string;
  options: any;
  register: any;
  defaultValue: any;
}

const Checkboxes: React.FC<Props> = ({
  label,
  name,
  options,
  register,
  defaultValue,
}) => {
  return (
    <FormSection label={label}>
      <LightBox>
        {options.map((option: any) => (
          <Grid
            key={option.value}
            container
            alignItems="center"
            sx={{
              mt: -1,
              mb: 1,
              "&:last-of-type": { mb: 0 },
            }}
          >
            <Checkbox
              sx={{ marginLeft: "-11px" }}
              defaultChecked={defaultValue.has(option.value)}
              {...register(`${name}_${option.value}`)}
            />
            <Typography sx={{ mt: "2px" }}>{option.label}</Typography>
          </Grid>
        ))}
      </LightBox>
    </FormSection>
  );
};

export default Checkboxes;
