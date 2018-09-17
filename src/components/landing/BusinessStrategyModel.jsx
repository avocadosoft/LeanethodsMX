import React from "react";
import PropTypes from "prop-types";
// Styles
import businessStregyModelStyle from "../../assets/jss/businessStregyModelStyle";
// Material UI
import { withStyles } from "@material-ui/core";

const BuinessStregyModel = props => {
  const { classes } = props;
  return (
    <div className={["container", classes.root].join(" ")}>
      <h3 className={classes.h3}>Collaborate With Us</h3>
    </div>
  );
};

BuinessStregyModel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(businessStregyModelStyle)(BuinessStregyModel);
