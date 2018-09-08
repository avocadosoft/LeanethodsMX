import React from "react";
import PropTypes from "prop-types";
// Styles
import footerStyle from "../assets/jss/footerStyle";
// Material UI
import { withStyles, Typography, Grid } from "@material-ui/core";
// React Router
import { Link } from "react-router-dom";
import footerLogo from "../assets/img/footer-logo.png";

const Footer = props => {
  const { classes } = props;

  return (
    <footer className={classes.root}>
      <div className="container">
        <img
          src={footerLogo}
          alt="footer-logo"
          className={classes.footerLogo}
        />

        <Grid container spacing={24}>
          <Grid item xs={6} md={4} lg={2}>
            <Typography className={classes.footerHeader}>Navigation</Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/methods"
            >
              Methods
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/consulting-facilitating"
            >
              Consulting & Facilitating
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/training"
            >
              Training
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/about"
            >
              Insights & Resources
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/about"
            >
              About
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/contact"
            >
              Contact
            </Typography>
          </Grid>

          <Grid item xs={6} md={4} lg={2}>
            <Typography className={classes.footerHeader}>Methods</Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/methods"
            >
              Innovation
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/consulting-facilitating"
            >
              Lean
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/training"
            >
              Data Analytics
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/about"
            >
              Six Sigma
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/contact"
            >
              Hoshin Planning
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/contact"
            >
              Strategy Development
            </Typography>
          </Grid>

          <Grid item xs={6} md={4} lg={2}>
            <Typography className={classes.footerHeader}>Training</Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/methods"
            >
              Methods
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/consulting-facilitating"
            >
              Courses
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/training"
            >
              Certifications
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/about"
            >
              Online Courses
            </Typography>

            <Typography
              className={classes.footerLink}
              component={Link}
              to="/contact"
            >
              Licensing
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Typography className={classes.footerHeader}>
              About Lean Methods Group
            </Typography>

            <Typography gutterBottom className={classes.footerText}>
              Lean Methods is a world-class global firm specializing in solving
              today’s toughest business problems. Everything we do is grounded
              in proven, research-based methodologies designed to ensure a
              highly collaborative experience that results in extraordinary,
              sustainable results.
              <br />
              <br />
              <strong>Call us </strong>
              at: +1 303-827-0010
            </Typography>
          </Grid>
        </Grid>
      </div>

      <div className={classes.footerBase}>
        <div className="container">
          <Typography
            color="secondary"
            variant="body1"
            gutterBottom
            align="center"
            className={classes.copyright}
          >
            Copyright © 2018 Lean Methods Group All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
