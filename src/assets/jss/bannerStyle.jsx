// Banner Styles

import { colors } from "./colors";

const bannerStyle = theme => ({
  hero: {
    backgroundSize: "cover",
    backgroundAttachment: "inherit",
    minHeight: "450px",
    [theme.breakpoints.down("sm")]: {
      minHeight: "400px"
    }
  },
  heroContent: {
    position: "relative",
    marginTop: "-350px"
  },
  h1: {
    color: "white",
    fontFamily: "googleSansBold",
    fontSize: "64px",
    marginBottom: "10px",
    marginTop: "-15px",
    marginRight: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "46px",
      marginTop: "20px",
      marginLeft: "20px"
    }
  },
  img: {
    height: "28px"
  },
  p: {
    color: "white",
    maxWidth: "715px",
    fontSize: "24px",
    padding: "30px 0px",
    WebkitFontSmoothing: "antialiased",
    [theme.breakpoints.up("sm")]: {
      minHeight: "100px"
    },
    [theme.breakpoints.only("md")]: {
      width: "90%"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "600px",
      margin: "20px",
      fontSize: "18px",
      paddingBottom: "10px"
    }
  },
  innerBottom: {
    width: "90%",
    maxWidth: "1071px",
    padding: "75px 0px",
    [theme.breakpoints.only("md")]: {
      maxWidth: "1000px"
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: "700px",
      padding: "50px 0px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      padding: "30px 0px"
    },
    backgroundColor: colors.blue
  }
});

export default bannerStyle;
