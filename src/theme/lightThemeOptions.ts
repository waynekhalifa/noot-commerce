import { Directions, Languages } from "@/constants/enums";
import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions = (locale: string) => {
  const options: ThemeOptions = {
    direction: locale === Languages.ARABIC ? Directions.RTL : Directions.LTR,
    palette: {
      mode: "light",

      primary: {
        light: "#41a9a5",
        main: "#12948f",
        dark: "#0c6764",
      },
      secondary: {
        light: "#368c9d",
        main: "#047085",
        dark: "#024e5d",
      },
      background: {
        paper: "#fff",
        default: "#fff",
      },
    },
    typography: {
      fontFamily:
        locale === "ar"
          ? ["Tajawal", "serif"].join(",")
          : ["Roboto", "serif"].join(","),
    },
  };

  return options;
};

export default lightThemeOptions;
