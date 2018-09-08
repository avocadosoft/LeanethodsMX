import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// Styles
import landingStyle from "../../assets/jss/landingStyle";
// Material UI
import { withStyles } from "@material-ui/core";

class Landing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <h1>Boilerplate</h1>
      </Fragment>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(landingStyle)(Landing);
