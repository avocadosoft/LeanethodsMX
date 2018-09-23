// Quote Styles

import { colors } from "./colors";

const quoteStyle = theme => ({
  root: {
    marginTop: "50px",
    marginBottom: "50px",
    borderLeft: "10px solid rgba(41, 125, 166, 0.22)",
    [theme.breakpoints.up("md")]: {
      maxWidth: "800px"
    }
  },
  p: {
    fontSize: "28px",
    paddingLeft: "15px",
    color: colors.lightBlue,
    WebkitFontSmoothing: "antialiased"
  },
  author: {
    marginTop: "20px",
    fontFamily: "googleSansBold",
    color: colors.lightBlue,
    width: "100%",
    fontSize: "16px",
    textAlign: "right",
    float: "right"
  }
});

export default quoteStyle;
