import { Box, Button, Grid, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  FormActions,
  InputTypes,
  Pages,
  Responses,
  Routes,
} from "@/constants/enums";
import {
  IApiVariables,
  IFormFieldsVariables,
  IModal,
  IModelName,
  IResourceName,
  IResponse,
  ISnackBar,
  IUpdateVariables,
} from "@/models/app";
import useFormValidations from "@/hooks/useFormValidations";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormFields from "@/components/UI/FormFields";
import SubmitButton from "./SubmitButton";
import { selectSnackbar } from "@/store/appSlice";
import { useSelector } from "react-redux";
import useApi from "@/hooks/useApi";
import { useRouter } from "next/router";
import useApp from "@/hooks/useApp";
import { createSnackbar } from "@/helpers/responser";
import MainSnackbar from "@/components/UI/MainSnackbar";
import { selectMediaModal } from "@/store/modalSlice";
import MainModal from "@/components/UI/MainModal";

interface Props {
  resourceName: IResourceName;
  singleName: IModelName;
  action: string;
  resource: any;
}

const Form: React.FC<Props> = ({
  resourceName,
  singleName,
  action,
  resource,
}) => {
  const snackbar: ISnackBar = useSelector(selectSnackbar);
  const mediaModal: IModal = useSelector(selectMediaModal);
  const formFields: IFormFieldsVariables = {
    slug: resourceName,
    model: resource,
  };
  const apiParams: IApiVariables = {
    slug: resourceName,
    singleName: singleName,
  };
  const api = useApi(apiParams);
  const { push } = useRouter();
  const { changeSnackbar } = useApp();
  const { getValidationSchema } = useFormValidations(formFields);

  const DEFAULT_VALUES: any = {};

  for (const field of api.fields) {
    if (resource) {
      DEFAULT_VALUES[field.name] = resource[`${field.name}`];
    } else {
      if (field.type === InputTypes.CHECKBOX)
        DEFAULT_VALUES[field.name] = false;
      if (field.type === InputTypes.MULTI_SELECT)
        DEFAULT_VALUES[field.name] = [];
      DEFAULT_VALUES[field.name] = "";
    }
  }

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    register,
    formState: { errors, isSubmitting },
  } = useForm<any>({
    resolver: yupResolver(getValidationSchema()),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const create = async (data: any) => {
    const createInput: any = { ...data };

    const response: IResponse = await api.create(createInput);

    if (response.type === Responses.SUCCESS) {
      changeSnackbar(createSnackbar("success", response.message!));

      push(`/${Routes.DASHBOARD}/${resourceName}`);
    } else {
      changeSnackbar(createSnackbar("error", response.message!));
    }
  };

  const update = async (data: any) => {
    const params: IUpdateVariables = { id: resource.id, data };
    const response: IResponse = await api.update(params);

    if (response.type === Responses.SUCCESS) {
      changeSnackbar(createSnackbar("success", response.message!));
    } else {
      changeSnackbar(createSnackbar("error", response.message!));
    }
  };

  // console.log(api.images);

  const renderContent = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={3}>
          <Grid item xs={12} lg={9}>
            <Box
              sx={{
                backgroundColor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                p: 2,
                pb: "4px",
                mb: 2,
              }}
            >
              {api.fields.map((field: any) => (
                <FormFields
                  {...field}
                  key={field.name}
                  control={control}
                  errors={errors}
                  watch={watch}
                  setValue={setValue}
                  register={register}
                />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <SubmitButton action={action} isSubmitting={isSubmitting} />

            {api.images &&
              api.images.map((field: any) => (
                <FormFields
                  {...field}
                  key={field.name}
                  control={control}
                  errors={errors}
                  watch={watch}
                  setValue={setValue}
                  register={register}
                />
              ))}
          </Grid>
        </Grid>
      </form>
    );
  };

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    return action === FormActions.CREATE
      ? await create(data)
      : await update(data);
  };

  const handleBack = () => push(`/${Routes.DASHBOARD}/${resourceName}`);

  return (
    <>
      <Box sx={{ pt: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: { xs: 3, sm: 4 },
          }}
        >
          <Button
            size="small"
            variant="outlined"
            color="primary"
            startIcon={<KeyboardBackspaceIcon fontSize="small" />}
            sx={{ mr: 2, textTransform: "capitalize" }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Typography
            variant="h5"
            component="h1"
            sx={{ textTransform: "capitalize" }}
          >
            {resourceName === Pages.MEDIA_LIBRARY.replace("/dashboard/", "")
              ? singleName
              : `${action} ${singleName}`}
          </Typography>
        </Box>
        {renderContent()}
      </Box>
      {snackbar.open && <MainSnackbar />}
      {mediaModal.open && <MainModal />}
    </>
  );
};

export default Form;
