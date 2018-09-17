import React from "react";
import PropTypes from "prop-types";
// Styles
import collaborateWithUsStyle from "../../assets/jss/collaborateWithUsStyle";
// Material UI
import { Grid, withStyles } from "@material-ui/core";

// src="https://www.youtube.com/embed/6eqGQttaQPs"

/*
<iframe
            className={classes.video}
            height={250}
            src="https://www.youtube.com/embed/6eqGQttaQPs"
          />
*/

const CollaborateWithUs = props => {
  const { classes } = props;
  return (
    <div className={["container", classes.root].join(" ")}>
      <h3 className={classes.h3}>Collaborate With Us</h3>

      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <p className={classes.p}>
            Collaboration. It’s not a buzz word; it’s a foundational element of
            how we engage our clients. Through collaboration we achieve results
            faster, with greater buy-in and maximum learning. That's why
            everything we do is grounded in methodology. With structured
            methods, we quickly come to use the same vocabulary, the same tools,
            and the same approach as our clients. Altogether, this ensures the
            most collaborative and agile path to results.
          </p>
        </Grid>
        <Grid item xs={12} md={6} className="center" />
      </Grid>
    </div>
  );
};

CollaborateWithUs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(collaborateWithUsStyle)(CollaborateWithUs);
