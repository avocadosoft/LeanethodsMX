import React, { Fragment } from "react";
import PropTypes from "prop-types";
// Styles
import heroStyle from "../../assets/jss/heroStyle";
// Material UI
import { withStyles, Grid } from "@material-ui/core";
// IMG
import dots from "../../assets/img/hero-dots.png";

const Hero = props => {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.hero} />
      <div className={[classes.heroContent, "container"].join(" ")}>
        <h1 className={classes.h1}>Problem Solved.</h1>
        <h3 className={classes.h3}>
          Because we believe every problem has a solution.
        </h3>
      </div>

      <div className={classes.heroBottom}>
        <div className={classes.innerBottom}>
          <Grid container>
            <Grid item xs={12} md={2}>
              <img src={dots} alt="hero-dots" className={classes.img} />
            </Grid>
            <Grid item xs={12} md={10}>
              <p className={[classes.p, "container"].join(" ")}>
                Problems take on all forms, and for each there is a proven,
                research-based methodology that offers the most efficient path
                to solution. We match our most skilled experts to your problems,
                using methods designed to ensure an engaging, highly
                collaborative experience that leads to rapid acceptance, maximum
                learning, and highly sustainable results.
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
};

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(heroStyle)(Hero);
