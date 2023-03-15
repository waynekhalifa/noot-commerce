import { IFormFieldsVariables } from "@/models/app";
import * as Yup from "yup";
import { Pages } from "../constants/enums";

const useFormValidations = (props: IFormFieldsVariables) => {
  const { slug } = props;

  const loginValidation = () =>
    Yup.object().shape({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(40, "Password must not exceed 40 characters"),
    });
  const registerValidation = () =>
    Yup.object().shape({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password1: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(40, "Password must not exceed 40 characters"),
      password2: Yup.string().oneOf(
        [Yup.ref("password1")],
        "Passwords must match"
      ),
    });

  const getValidationSchema = () => {
    switch (slug) {
      case Pages.LOGIN:
        return loginValidation();
      case Pages.REGISTER:
        return registerValidation();
      default:
        return Yup.object();
    }
  };

  return { getValidationSchema };
};

export default useFormValidations;
