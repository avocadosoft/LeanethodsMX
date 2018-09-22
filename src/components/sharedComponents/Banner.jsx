import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
// Styles
import bannerStyle from "../../assets/jss/bannerStyle";
// Material UI
import { withStyles, Grid } from "@material-ui/core";
// IMG
import dots from "../../assets/img/hero-dots.png";

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      img: require("../../assets/img/" + "methods-banner" + ".jpg")
    };
  }

  render() {
    const { classes } = this.props;
    const { img } = this.state;

    return (
      <Fragment>
        <div
          className={classes.hero}
          style={{
            backgroundImage: "url(" + img + ")"
          }}
        />

        <div className={classes.heroContent}>
          <div className={classes.innerBottom}>
            <Grid container>
              <Grid item xs={12} md={3} lg={2}>
                <img src={dots} alt="hero-dots" className={classes.img} />
              </Grid>
              <Grid item xs={12} md={9} lg={10}>
                <div>
                  <h1 className={classes.h1}>{this.props.title}</h1>
                  <p className={classes.p}>{this.props.text}</p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Fragment>
    );
  }
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(bannerStyle)(Banner);
