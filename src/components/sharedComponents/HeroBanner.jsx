import React, { Component } from "react";
import PropTypes from "prop-types";
// Styles
import heroBannerStyle from "../../assets/jss/heroBannerStyle";
// Material UI
import { withStyles, Grid, Button } from "@material-ui/core";
// IMG
import dots from "../../assets/img/dots-long.png";
// Icons
import ArrowForward from "@material-ui/icons/ArrowForward";

class HeroBanner extends Component {
  render() {
    const { classes, img, title, text } = this.props;

    return (
      <div className={classes.root}>
        <div className="container">
          <Grid container spacing={32}>
            <Grid item xs={12} md={9}>
              <h1 className={classes.h1}>{title}</h1>
              <p className={classes.p}>{text}</p>
            </Grid>
            <Grid item xs={12} md={3}>
              <img
                src={require("../../assets/img/" + img)}
                alt="strategy-model"
                className={classes.img}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.contact}>
          <img src={dots} alt="hero-dots" className={classes.dots} />
          <div className="container">
            <Grid container spacing={32}>
              <Grid item xs={12} lg={8}>
                <h1 className={classes.contactH1}>Talk to an expert</h1>
                <p className={classes.contactP1}>
                  Learn how our innovation solutions can be tailored to your
                  business.
                </p>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                >
                  <span>Get In Touch</span>
                  <ArrowForward className={classes.arrowForward} />
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

HeroBanner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(heroBannerStyle)(HeroBanner);
