// Card Styles

const infoCardStyle = theme => ({
  card: {
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 400
    }
  },
  media: {
    height: 200,
    [theme.breakpoints.down("sm")]: {
      height: 200
    }
  },
  h2: {
    color: theme.palette.primary.darker,
    [theme.breakpoints.only("sm")]: {
      height: 50,
      fontSize: "21px"
    }
  },
  p: {
    color: theme.palette.primary.darker,
    height: 40,
    [theme.breakpoints.only("sm")]: {
      height: 60
    }
  }
});

export default infoCardStyle;
