// Landing Methods Style

import landingRight from "../img/landingRight.png";

const landingMethodsStyle = theme => ({
  root: {
    paddingTop: "100px",
    marginBottom: "100px",
    overflow: "hidden",
    "@media (min-width: 1100px)": {
      marginTop: "100px",
      backgroundImage: "url(" + landingRight + ")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right bottom",
      backgroundSize: "47%"
    }
  },
  left: {
    marginTop: "80px",
    float: "left",
    width: "66%",
    "@media (max-width: 999px)": {
      width: "100%"
    }
  },
  method: {
    marginLeft: "20px",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px"
    },
    "& h1": {
      marginBottom: "23px",
      fontSize: "28px",
      lineHeight: "28px",
      fontFamily: "googleSansBold",
      minWidth: "350px",
      [theme.breakpoints.only("sm")]: {
        fontSize: "22px"
      }
    },
    "& img": {
      maxWidth: "43px",
      marginBottom: "26px"
    },
    "& p": {
      fontSize: "18px",
      lineHeight: "24px",
      marginBottom: "15px",
      height: "80px"
    },
    "& a": {
      position: "relative"
      // right: "16px"
    }
  }
});

export default landingMethodsStyle;
