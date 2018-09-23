import React from "react";
import PropTypes from "prop-types";
// Styles
import quoteSyle from "../../assets/jss/quoteSyle";
// Material UI
import { withStyles, Grid } from "@material-ui/core";

const Quote = props => {
  const { classes } = props;
  return (
    <div className="container">
      <Grid container className={classes.root}>
        <Grid item xs={12} md={10}>
          <p className={classes.p}>
            Market leaders don't simply implement the best practices of others;
            they are the companies that develop the new best practices that
            others aspire to.
          </p>
          <span className={classes.author}>
            - Wes Waldo, Lean Methods President
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

Quote.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(quoteSyle)(Quote);
