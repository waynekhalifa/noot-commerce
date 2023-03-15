import useTranslation from "next-translate/useTranslation";
import { IFormField, IFormFieldsVariables } from "@/models/app";
import { Pages } from "../constants/enums";

const useFormFields = (props: IFormFieldsVariables) => {
  const { slug } = props;
  const { t } = useTranslation("common");

  const loginFields = (): IFormField[] => [
    {
      label: t("username"),
      name: "username",
      type: "text",
      autoFocus: true,
    },
    {
      label: t("password"),
      name: "password",
      type: "password",
    },
  ];

  const registerFields = (): IFormField[] => [
    {
      label: t("firstName"),
      name: "first_name",
      type: "text",
      autoFocus: true,
    },
    {
      label: t("lastName"),
      name: "last_name",
      type: "text",
    },
    {
      label: t("username"),
      name: "username",
      type: "text",
    },
    {
      label: t("email"),
      name: "email",
      type: "text",
    },
    {
      label: t("password"),
      name: "password1",
      type: "password",
    },
    {
      label: t("confirmPassword"),
      name: "password2",
      type: "password",
    },
  ];

  const forgotFields = (): IFormField[] => [
    {
      label: t("email"),
      name: "email",
      type: "text",
      autoFocus: true,
    },
  ];

  const resetFields = (): IFormField[] => [
    {
      label: t("password"),
      name: "password",
      type: "password",
      autoFocus: true,
    },
    {
      label: t("confirmPassword"),
      name: "confirmPassword",
      type: "password",
    },
  ];

  const verificationFields = (): IFormField[] => [
    {
      label: "",
      name: "verificationCode",
      type: "hidden",
    },
  ];

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Pages.LOGIN:
        return loginFields();
      case Pages.REGISTER:
        return registerFields();
      case Pages.FORGOT_PASSWORD:
        return forgotFields();
      case Pages.RESET_PASSWORD:
        return resetFields();
      case Pages.VERIFICATION_CODE:
        return verificationFields();
      default:
        return [];
    }
  };

  const getCheckboxesFields = (): IFormField[] => {
    switch (slug) {
      default:
        return [];
    }
  };

  return {
    getFormFields,
    getCheckboxesFields,
  };
};

export default useFormFields;
