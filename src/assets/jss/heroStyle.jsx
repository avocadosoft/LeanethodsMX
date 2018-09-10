// Landing Styles

import homeHero from "../img/home-hero.jpg";

const heroStyle = theme => ({
  root: {},
  hero: {
    backgroundImage: "url(" + homeHero + ")",
    backgroundSize: "cover",
    backgroundAttachment: "inherit",
    minHeight: "700px"
  },
  heroContent: {
    position: "relative",
    marginTop: "-520px",
    color: "white"
  },
  h1: {
    fontFamily: "googleSansBold",
    fontSize: "64px",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "46px"
    }
  },
  h3: {
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
    maxWidth: "715px",
    WebkitFontSmoothing: "antialiased",
    [theme.breakpoints.down("sm")]: {
      margin: "20px auto"
    }
  },
  heroBottom: {},
  innerBottom: {
    width: "100%",
    maxWidth: "1071px",
    backgroundColor: "#001F2F",
    padding: "80px 0px",
    fontSize: "24px",
    color: "white"
  }
});

export default heroStyle;
