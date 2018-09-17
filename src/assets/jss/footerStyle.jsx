// Footer Styles

import { colors } from "./colors.jsx";

const footerStyle = theme => ({
  root: {
    backgroundColor: colors.blue,
    color: theme.palette.secondary.main,
    marginTop: "50px",
    bottom: "0",
    width: "100%"
  },
  footerBase: {
    background: "rgba(0, 0, 0, 0.30)",
    marginTop: "30px",
    paddingBottom: "10px"
  },
  copyright: {
    paddingTop: "10px"
  },
  footerLogo: {
    marginTop: "50px",
    marginBottom: "30px"
  },
  footerHeader: {
    marginBottom: "30px",
    color: colors.footerHeader,
    fontSize: "18px"
  },
  footerLink: {
    marginBottom: "10px",
    color: theme.palette.secondary.main,
    fontSize: "16px",
    "&:hover": {
      color: colors.hoverColor
    },
    transition: "0.3s",
    textDecoration: "none"
  },
  footerText: {
    color: theme.palette.secondary.main
  }
});

export default footerStyle;
