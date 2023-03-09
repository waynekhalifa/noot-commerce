import { Directions, Languages } from "@/constants/enums";
import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions = (locale: string) => {
  const options: ThemeOptions = {
    direction: locale === Languages.ARABIC ? Directions.RTL : Directions.LTR,
    palette: {
      primary: {
        light: "#933346",
        main: "#780018",
        dark: "#540010",
      },
      secondary: {
        light: "#333333",
        main: "#010101",
        dark: "#000000",
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
