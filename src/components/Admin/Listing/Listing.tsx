import FormFields from "@/components/UI/FormFields";
import useApi from "@/hooks/useApi";
import { IFormField } from "@/models/app";
import { Box } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  slug: string;
}

const Listing: React.FC<Props> = ({ slug }) => {
  const api = useApi(slug, "Product");

  const DEFAULT_VALUES: any = {};

  for (const field of api.fields) {
    DEFAULT_VALUES[field.name] = "";
  }

  console.log(api.fields);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    console.log(data);
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
    </Box>
  );
};

export default Listing;
