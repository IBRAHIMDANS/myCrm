import { createTheme } from "@material-ui/core/styles";
import {
  grey,
  lightGreen,
  orange,
  purple,
  red,
} from "@material-ui/core/colors";

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
      main: "#000",
      ...palettes.primary,
    },
    secondary: {
      main: "#fff",
      // secondary:"#fff",
      ...palettes.secondary,
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
  overrides: {
    MuiList: {
      root : {
        padding: 0
      }
    },
    MuiMenuItem: {
      root: {
        // color: "white",
        backgroundColor: "#000",
        "&$selected": { // <--// mixing the two classes
          color: "#000",
          backgroundColor: "#21b3d3",
        },
      },
    },
  },

});

export default theme;
