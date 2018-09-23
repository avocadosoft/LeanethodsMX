import React from "react";
import PropTypes from "prop-types";
// Styles
import businessStregyModelStyle from "../../assets/jss/businessStregyModelStyle";
// Material UI
import { withStyles, Grid, Button } from "@material-ui/core";
// Img
import strategyModel from "../../assets/img/strategy-model.png";
// Icons
import ArrowForward from "@material-ui/icons/ArrowForward";

const BuinessStregyModel = props => {
  const { classes } = props;
  return (
    <div className={["container", classes.root].join(" ")}>
      <Grid container className={classes.root} spacing={16} alignItems="center">
        <Grid item xs={12} md={6} lg={7}>
          <h2 className={classes.h2}>Business Strategy Model</h2>
          <p className={classes.p}>
            The strategically-driven business places equal emphasis on the
            creation and execution of strategy, recognizing that the role of
            strategic planning is to translate strategy into action. Using
            time-tested, proven methodologies, we address all aspects of the
            business by methodically putting it all together with our
            comprehensive Business Strategy Model.
          </p>
          <Button variant="contained" size="large" className={classes.button}>
            Learn More <ArrowForward className={classes.arrowForward} />
          </Button>
        </Grid>

        <Grid item xs={12} md={6} lg={5}>
          <img
            src={strategyModel}
            alt="strategy-model"
            className={[classes.img, "center"].join(" ")}
          />
        </Grid>
      </Grid>
    </div>
  );
};

BuinessStregyModel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(businessStregyModelStyle)(BuinessStregyModel);
