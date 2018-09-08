// Navbar Styles

const navbarStyle = theme => ({
  root: {},
  title: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      margin: "5px auto",
      flexGrow: 0
    }
  },
  logo: {
    width: "112px",
    marginTop: "10px",
    [theme.breakpoints.up("md")]: {
      margin: "10px 0px 0px 10px"
    },
    "&:hover": {
      opacity: "0.8"
    },
    WebkitBackfaceVisibility: "hidden",
    transition: "0.3s"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.down("sm")]: {
      marginRight: "-24px"
    }
  },
  appbar: {
    boxShadow: "none"
  },
  appbarButtons: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  link: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.light
    },
    transition: "0.3s",
    textDecoration: "none",
    marginRight: "30px",
    fontWeight: "700"
  }
});

export default navbarStyle;
