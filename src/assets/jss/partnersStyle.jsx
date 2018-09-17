// Partners Styles

import { colors } from "./colors";

const partnersStyle = theme => ({
  root: {
    marginTop: "50px"
  },
  h2: {
    WebkitFontSmoothing: "antialiased",
    marginBottom: "40px",
    color: colors.textColor
  },
  img: {
    margin: "0 1px",
    "@media (max-width: 602px)": {
      maxWidth: "268px"
    },
    [theme.breakpoints.only("xs")]: {
      width: "45%"
    }
  },
  a: {
    "&:hover": {
      opacity: "0.8",
      transition: "0.3s"
    }
  },
  container: {
    [theme.breakpoints.up("lg")]: {
      width: "90%"
    }
  }
});

export default partnersStyle;
