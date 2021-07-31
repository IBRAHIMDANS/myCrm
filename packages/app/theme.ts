import { createTheme } from "@material-ui/core/styles";
import {
  grey,
  lightGreen,
  orange,
  purple,
  red,
} from "@material-ui/core/colors";
import { white } from "colorette";

const palettes = {
  primary: purple,
  secondary: lightGreen,
  error: red,
  background: grey,
  warning: orange,
  success: lightGreen,
  info: purple,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      ...palettes.primary,
    },
    secondary: {
      main: "#fff",
      // secondary:"#fff",
      // ...palettes.secondary,
    },

    error: {
      main: red.A400,
      ...palettes.error,
    },
    background: {
      default: "#fff",
      ...palettes.background,
    },
  },
});

export default theme;
