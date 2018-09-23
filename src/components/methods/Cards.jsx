import React, { Component } from "react";
import PropTypes from "prop-types";

// Styles
import cardsStyle from "../../assets/jss/cardsStyle";

import InfoCard from "../sharedComponents/InfoCard";
// Material UI
import { withStyles, Grid } from "@material-ui/core";

class Cards extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className="container">
          <Grid container justify="center" spacing={16}>
            <Grid item xs={12} sm={6}>
              <InfoCard
                img={"card-innovation.jpg"}
                title={"Innovation"}
                text={
                  "Discover systematic ways to develop novel new processes, products and business models."
                }
                link={"/methods/innovation"}
                className={classes.card}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InfoCard
                img={"card-lean.jpg"}
                title={"Lean"}
                text={
                  "Put problem solving in the hands of your people through a proven set of methods and tools."
                }
                link={"/methods/lean"}
                className={classes.card}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InfoCard
                img={"card-data-analytics.jpg"}
                title={"Data Analytics"}
                text={
                  "Derive insights from your data with upskilled employees and deliver value to the business."
                }
                link={"/methods/data-analytics"}
                className={classes.card}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InfoCard
                img={"card-six-sigma.jpg"}
                title={"Six Sigma"}
                text={
                  "Transform individuals and teams into continuous problem solvers with this data-driven methodology."
                }
                link={"/methods/six-sigma"}
                className={classes.card}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InfoCard
                img={"card-hoshin-planning.jpg"}
                title={"Hoshin Planning"}
                text={
                  "Connect your strategy creation and execution by focusing on the bridge between the two."
                }
                link={"/methods/hoshin-planning"}
                className={classes.card}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InfoCard
                img={"card-strategy-development.jpg"}
                title={"Strategy Development"}
                text={
                  "Build a core foundation that is poised for successful execution. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                }
                link={"/methods/strategy-development"}
                className={classes.card}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(cardsStyle)(Cards);
