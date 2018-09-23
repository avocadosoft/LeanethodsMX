// HeroBanner Styles

import { colors } from "./colors";

const heroBannerStyle = theme => ({
  root: {
    padding: "100px 0px",
    backgroundColor: colors.grayBackground,
    [theme.breakpoints.down("sm")]: {
      padding: "0"
    }
  },
  img: {
    width: "234px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  h1: {
    color: theme.palette.primary.darker,
    fontFamily: "googleSansBold",
    fontSize: "64px",
    marginTop: "50px",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "46px"
    }
  },
  p: {
    color: theme.palette.primary.darker,
    fontSize: "24px",
    lineHeight: "34px",
    maxWidth: "700px",
    WebkitFontSmoothing: "antialiased",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "28px"
    }
  },
  contact: {
    marginTop: "100px",
    padding: "50px 0",
    backgroundColor: colors.blue,
    width: "85%",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      marginTop: "50px"
    }
  },
  contactH1: {
    color: "white",
    fontSize: "40px",
    fontWeight: "400",
    WebkitFontSmoothing: "antialiased",
    marginTop: "10px"
  },
  contactP1: {
    color: "white",
    fontSize: "18px",
    WebkitFontSmoothing: "antialiased",
    marginTop: "30px"
  },
  button: {
    color: colors.blue,
    backgroundColor: colors.yellow,
    height: "40px",
    width: "100%",
    maxWidth: "350px",
    [theme.breakpoints.up("md")]: {
      padding: "0px"
    },
    [theme.breakpoints.only("lg")]: {
      marginTop: "30px"
    },
    "&:hover": {
      backgroundColor: colors.yellow,
      opacity: "0.8",
      transition: "0.3s"
    }
  },
  arrowForward: {
    marginLeft: "10px"
  }
});

export default heroBannerStyle;
