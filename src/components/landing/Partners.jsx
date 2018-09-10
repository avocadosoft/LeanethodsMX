import React, { Component } from "react";
import PropTypes from "prop-types";
// Styles
import partnersStyle from "../../assets/jss/partnersStyle";
// Material UI
import { withStyles, Grid } from "@material-ui/core";

class Partners extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={["container", "center", classes.root].join(" ")}>
        <h2 className="center">Trusted By</h2>

        <Grid container spacing={0}>
          <Grid item xs={6} md={4} lg={3}>
            1
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            2
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            3
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            4
          </Grid>
        </Grid>
      </div>
    );
  }
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(partnersStyle)(Partners);
