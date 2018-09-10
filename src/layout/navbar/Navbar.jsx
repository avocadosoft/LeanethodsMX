import React, { Fragment } from "react";
import PropTypes from "prop-types";
// Styles
import navbarStyle from "../../assets/jss/navbarStyle";
// Material UI
import { AppBar, Toolbar, withStyles } from "@material-ui/core";
// React Router
import { Link } from "react-router-dom";
// Icons
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// Components
import LeftDrawer from "./LeftDrawer";
// img
import Logo from "../../assets/img/lmg-logo.png";

const Navbar = props => {
  const { classes } = props;
  return (
    <Fragment>
      <LeftDrawer onClick={click => (this.clickChild = click)} />
      <AppBar position="static" className={classes.appbar} color="secondary">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="primary"
            aria-label="Menu"
            onClick={() => this.clickChild("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.title}>
            <Link to="/">
              <img src={Logo} alt="Navbar-logo" className={classes.logo} />
            </Link>
          </div>

          <span className={classes.appbarButtons}>
            <Link to="/methods" className={classes.link}>
              Methods
            </Link>

            <Link to="/consulting-facilitating" className={classes.link}>
              Consulting & Facilitating
            </Link>

            <Link to="/training" className={classes.link}>
              Training
            </Link>

            <Link to="/resources" className={classes.link}>
              Insights & Resources
            </Link>

            <Link to="/about" className={classes.link}>
              About
            </Link>

            <Link to="/contact-us" className={classes.link}>
              Contact
            </Link>
          </span>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(navbarStyle)(Navbar);
