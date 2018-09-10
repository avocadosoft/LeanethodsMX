// Colors Pallete

import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  footerBackgroundColor: "#001F2F",
  hoverColor: "#c2c2c2",
  footerHeader: "rgba(255, 255, 255, 0.5)"
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4494bc",
      main: "#006496",
      dark: "#004669",
      contrastText: "#f00"
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
      contrastText: "#f00"
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: "googleSansRegular"
  }
});

export { colors, theme };
