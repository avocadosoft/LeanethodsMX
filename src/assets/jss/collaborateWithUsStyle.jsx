// CollaborateWithUs Styles

const collaborateWithUsStyle = theme => ({
  root: {
    marginTop: "100px",
    backgroundColor: "transparent"
  },
  video: {
    width: "90%",
    maxWidth: "500px"
  },
  h3: {
    fontFamily: "googleSansBold",
    fontSize: "40px",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    }
  },
  p: {
    WebkitFontSmoothing: "antialiased",
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px"
    }
  }
});

export default collaborateWithUsStyle;
