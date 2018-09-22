// Colors Pallete

import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  blue: "#001F2F",
  yellow: "#FFCB5B",
  hoverColor: "#c2c2c2",
  footerHeader: "rgba(255, 255, 255, 0.5)",
  textColor: "#001F2F"
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4494bc",
      main: "#006496",
      dark: "#004669",
      darker: "#003558"
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
      contrastText: "#000000"
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: "googleSansRegular"
  }
});

export { colors, theme };
