import useTranslation from "next-translate/useTranslation";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

import bg from "@images/accounts-bg.png";
import logo from "@images/logo.png";
import useResponsive from "@/hooks/useResponsive";
import {
  IFormField,
  IFormFieldsVariables,
  IMediaQuery,
  IResponse,
} from "@/models/app";
import {
  AuthMessages,
  Languages,
  Pages,
  Responses,
  Routes,
} from "@/constants/enums";
import Link from "@/components/UI/Link";
import useFormFields from "@/hooks/useFormFields";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import useFormValidations from "@/hooks/useFormValidations";
import FormFields from "../UI/FormFields";
import VerificationField from "../UI/FormFields/VerficationField";
import { useRouter } from "next/router";
import { login, register } from "@/services/auth";
import useConfirm from "@/hooks/useConfirm";
import { useDispatch } from "react-redux";
import { setSession } from "@/store/appSlice";
import { useEffect } from "react";
import useUpdating from "@/hooks/useUpdating";
import { setCookie } from "cookies-next";

interface Props {
  slug: string;
}

const Auth: React.FC<Props> = ({ slug }) => {
  const dispatch = useDispatch();
  const { locale, push } = useRouter();
  const { t } = useTranslation("common");
  const { confirm, setConfirm } = useConfirm();
  const { updating, setUpdating } = useUpdating();
  const formFields: IFormFieldsVariables = { slug };
  const { getFormFields } = useFormFields(formFields);
  const { getValidationSchema } = useFormValidations(formFields);
  const DEFAULT_VALUES: any = {};
  for (const field of getFormFields()) {
    DEFAULT_VALUES[field.name] = "";
  }
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(getValidationSchema()),
    mode: "onChange",
    defaultValues: DEFAULT_VALUES,
  });

  const params: IMediaQuery = { query: "up", key: "md" };
  const mdUp = useResponsive(params);
  const emailChanges: string = watch("email");
  const passwordChanges: string = watch("password");

  useEffect(() => {
    if (confirm.length > 0) setConfirm("");

    // eslint-disable-next-line
  }, [emailChanges, passwordChanges]);

  const renderTitle = (): string | null => {
    switch (slug) {
      case Pages.LOGIN:
        return t("welcomeBack");
      case Pages.REGISTER:
        return t("createAccount");
      case Pages.FORGOT_PASSWORD:
        return t("forgotPassword");
      case Pages.VERIFICATION_CODE:
        return t("enterVerificationCode");
      case Pages.RESET_PASSWORD:
        return t("resetPassword");
      default:
        return null;
    }
  };

  const renderButtonText = (): string | null => {
    if (slug === Pages.LOGIN) return t("login");
    if (slug === Pages.REGISTER) return t("createNewAccount");
    if (slug === Pages.RESET_PASSWORD) return t("changePassword");
    if (slug === Pages.VERIFICATION_CODE || slug === Pages.FORGOT_PASSWORD)
      return t("continue");

    return null;
  };

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    setUpdating(true);

    let response: IResponse = {
      type: Responses.ERROR,
      message: "Default Case",
    };

    switch (slug) {
      case Pages.LOGIN:
        response = await login({
          username: data.email,
          password: data.password,
        });
        break;
      case Pages.REGISTER:
        response = await register({
          first_name: data.firstName,
          last_name: data.lastName,
          username: data.firstName + data.lastName,
          email: data.email,
          password1: data.password,
          password2: data.confirmPassword,
        });
        break;
      default:
        break;
    }

    if (response.type === Responses.SUCCESS) {
      if (
        response.message &&
        response.message === AuthMessages.REGISTER_SUCCESS
      ) {
        setCookie("user", response.data.data);
        push("http://localhost:3001/overview");
      }
      if (response.message && response.message === AuthMessages.LOGIN_SUCCESS) {
        dispatch(setSession(response.data[0]));

        setCookie("user", response.data.data);
        push("http://localhost:3001/overview");
      }
    } else {
      if (response.message && response.message === "Default Case") {
        console.log(data);
      } else {
        if (response.message!.includes("IDBDatabase")) {
          push(`/${Routes.DASHBOARD}/${Pages.OVERVIEW}`);
        } else {
          setConfirm(response.message!);
          setUpdating(false);
        }
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          width: { md: "40vw" },
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          p: { xs: 4, md: 12 },
        }}
      >
        {renderTitle && (
          <Typography variant="h4" fontWeight={700} paragraph>
            {renderTitle()}
          </Typography>
        )}
        {slug === Pages.FORGOT_PASSWORD && (
          <Typography color="text.secondary" paragraph>
            {t("weWillSendYou")}
          </Typography>
        )}
        {slug === Pages.VERIFICATION_CODE && (
          <Typography color="text.secondary" paragraph>
            {t("verificationCodeHasBeenSent")}
          </Typography>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "block", width: "100%" }}
        >
          {getFormFields().map((field: IFormField) => (
            <FormFields
              key={field.name}
              {...field}
              control={control}
              errors={errors}
            />
          ))}
          {slug === Pages.LOGIN && (
            <Link
              href={`/${Routes.ACCOUNTS}/${Pages.FORGOT_PASSWORD}`}
              sx={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {t("forgotPassword")}
            </Link>
          )}
          {slug === Pages.REGISTER && (
            <Typography variant="body2" gutterBottom>
              {t("privacyPolicy")}
            </Typography>
          )}
          {slug === Pages.VERIFICATION_CODE && (
            <>
              <Grid
                container
                flexDirection={
                  locale === Languages.ARABIC ? "row-reverse" : "row"
                }
                sx={{ maxWidth: "fit-content" }}
              >
                <VerificationField
                  value=""
                  handleChange={(e) => console.log(e)}
                />
                <VerificationField
                  value=""
                  handleChange={(e) => console.log(e)}
                />
                <VerificationField
                  value=""
                  handleChange={(e) => console.log(e)}
                />
                <VerificationField
                  value=""
                  handleChange={(e) => console.log(e)}
                />
              </Grid>
              <Typography sx={{ display: "flex", mt: 4, mb: 2 }}>
                <Typography component="span">
                  {t("dontReceiveVerificationCode")}
                </Typography>
                <Link
                  href={`/${Routes.ACCOUNTS}/${Pages.REGISTER}`}
                  sx={{ display: "block", ml: 2 }}
                >
                  {t("resendCode")}
                </Link>
              </Typography>
            </>
          )}
          {renderButtonText() && (
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              disableElevation
              disableRipple
              disabled={updating}
            >
              {updating ? (
                <CircularProgress thickness={8} size={26} color="primary" />
              ) : (
                renderButtonText()
              )}
            </Button>
          )}
        </Box>
        {slug === Pages.LOGIN && (
          <Typography sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Typography component="span">{t("dontHaveAccount")}</Typography>
            <Link
              href={`/${Routes.ACCOUNTS}/${Pages.REGISTER}`}
              sx={{ display: "block", ml: 2 }}
            >
              {t("createAccount")}
            </Link>
          </Typography>
        )}
        {slug === Pages.REGISTER && (
          <Typography sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Typography component="span">{t("alreadyHaveAccount")}</Typography>
            <Link
              href={`/${Routes.ACCOUNTS}/${Pages.LOGIN}`}
              sx={{ display: "block", ml: 2 }}
            >
              {t("login")}
            </Link>
          </Typography>
        )}
        {slug === Pages.FORGOT_PASSWORD ||
          (slug === Pages.VERIFICATION_CODE && (
            <Typography
              sx={{ display: "flex", justifyContent: "center", mt: 4 }}
            >
              <Typography component="span">{t("backTo")}</Typography>
              <Link
                href={`/${Routes.ACCOUNTS}/${Pages.LOGIN}`}
                sx={{ display: "block", ml: 2 }}
              >
                {t("login")}
              </Link>
            </Typography>
          ))}
        <Box sx={{ height: 48, mt: 2, opacity: confirm.length > 0 ? 1 : 0 }}>
          <Alert variant="filled" severity="error">
            {confirm}
          </Alert>
        </Box>
      </Box>
      {mdUp && (
        <Box
          sx={{
            position: "absolute",
            width: "60vw",
            height: "100vh",
            right: "0px",
            top: "0px",
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${bg.src}) center center`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              minHeight: "100%",
              maxWidth: "640px",
              m: "0 auto",
            }}
          >
            <Box
              component="img"
              src={logo.src}
              alt="logo"
              sx={{ display: "block", m: "0 auto", mb: 4 }}
            />
            <Typography
              variant="h4"
              align="center"
              color="common.white"
              fontWeight={700}
            >
              منصتك الأولى للتحقق من صحة الأخبار المنشورة وتعلٌّم الأدوات
              المخصصة لذلك
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Auth;
