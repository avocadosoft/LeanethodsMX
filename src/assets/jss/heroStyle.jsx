// Landing Styles

import homeHero from "../img/home-hero.jpg";

import { colors } from "./colors";

const heroStyle = theme => ({
  hero: {
    backgroundImage: "url(" + homeHero + ")",
    backgroundSize: "cover",
    backgroundAttachment: "inherit",
    minHeight: "700px"
  },
  heroContent: {
    position: "relative",
    marginTop: "-520px"
  },
  h1: {
    color: "white",
    fontFamily: "googleSansBold",
    fontSize: "64px",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "46px"
    }
  },
  h3: {
    color: "white",
    WebkitFontSmoothing: "antialiased",
    fontSize: "40px",
    lineHeight: "44px",
    marginBottom: "80px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    },
    maxWidth: "700px"
  },
  img: {
    height: "28px"
  },
  p: {
    color: "white",
    maxWidth: "715px",
    WebkitFontSmoothing: "antialiased",
    [theme.breakpoints.down("sm")]: {
      margin: "20px auto"
    }
  },
  innerBottom: {
    width: "100%",
    maxWidth: "1071px",
    backgroundColor: colors.blue,
    padding: "80px 0px",
    fontSize: "24px",
    color: "white"
  }
});

export default heroStyle;
