import FormFields from "@/components/UI/FormFields";
import useApi from "@/hooks/useApi";
import { IFormField, IResponse } from "@/models/app";
import { selectAccessToken } from "@/store/appSlice";
import { Box, Button, CircularProgress } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

interface Props {
  slug: string;
}

const Listing: React.FC<Props> = ({ slug }) => {
  const token: string = useSelector(selectAccessToken);
  const api = useApi(slug, "Product");

  const DEFAULT_VALUES: any = {};

  for (const field of api.fields) {
    DEFAULT_VALUES[field.name] = "";
  }

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<any>({
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    const response: IResponse = await api.create(data, token);

    console.log({ response });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "block", width: "100%" }}
    >
      {api.fields.map((field: IFormField) => (
        <FormFields
          key={field.name}
          {...field}
          control={control}
          errors={errors}
        />
      ))}
      <Button
        size="large"
        type="submit"
        variant="contained"
        disableElevation
        disableRipple
        disabled={isSubmitting}
      >
        {isSubmitting ? <CircularProgress /> : "save"}
      </Button>
    </Box>
  );
};

export default Listing;
