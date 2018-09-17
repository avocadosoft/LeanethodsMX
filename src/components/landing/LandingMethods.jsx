import React from "react";
import PropTypes from "prop-types";
// Styles
import landingMethodsStyle from "../../assets/jss/landingMethodsStyle";
// Material UI
import { Grid, withStyles } from "@material-ui/core";
// Component
import Method from "./Method";

const LandingMethods = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={"container"}>
        <div className={classes.left}>
          <Grid container spacing={32}>
            <Grid item xs={12} sm={6}>
              <Method
                img={"innovation"}
                name={"Innovation"}
                text={
                  "Discover systematic ways to develop novel new processes, products and business models."
                }
                link={"/innovation"}
                classes={classes.method}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Method
                img={"lean"}
                name={"Lean"}
                text={
                  "Put problem solving in the hands of your people through a proven set of methods and tools."
                }
                link={"/lean"}
                classes={classes.method}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Method
                img={"data"}
                name={"Data Analytics"}
                text={
                  "Derive insights from your data with upskilled employees and deliver value to the business."
                }
                link={"/data-analytics"}
                classes={classes.method}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Method
                img={"six-sigma"}
                name={"Six Sigma"}
                text={
                  "Transform individuals and teams into continuous problem solvers with this data-driven methodology."
                }
                link={"/six-sigma"}
                classes={classes.method}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Method
                img={"hoshin"}
                name={"Hoshin Planning"}
                text={
                  "Connect your strategy creation and execution by focusing on the bridge between the two."
                }
                link={"/hoshin-planning"}
                classes={classes.method}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Method
                img={"strat"}
                name={"Strategy Development"}
                text={
                  "Build a core strategic foundation for your organization that is poised for a successful execution."
                }
                link={"/strategy-development"}
                classes={classes.method}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

LandingMethods.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(landingMethodsStyle)(LandingMethods);
