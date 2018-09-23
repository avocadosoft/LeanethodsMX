// BuinessStregyModel Style

import { colors } from "./colors";

const businessStregyModelStyle = theme => ({
  root: {
    marginTop: "100px",
    marginBottom: "100px"
  },
  h2: {
    fontSize: "40px",
    marginBottom: "32px",
    lineHeight: "50px",
    fontFamily: "googleSansBold"
  },
  p: {
    fontSize: "18px",
    lineHeight: "24px",
    marginBottom: "32px"
  },
  arrowForward: {
    marginLeft: "10px"
  },
  img: {
    width: "90%",
    maxWidth: "500px",
    display: "block",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  button: {
    color: colors.blue,
    backgroundColor: colors.yellow,
    transition: "0.3s",
    height: "40px",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    },
    "&:hover": {
      backgroundColor: colors.yellow,
      opacity: "0.8"
    }
  }
});

export default businessStregyModelStyle;
