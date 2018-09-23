import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Styles
import cardsStyle from "../../assets/jss/cardsStyle";

import InfoCard from "../sharedComponents/InfoCard";
// Material UI
import { withStyles, Grid } from "@material-ui/core";

const Cards = props => {
  const { classes } = props;

  return (
    <Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12}>
          <InfoCard
            img={"card-lean.jpg"}
            title={"Innovation"}
            text={
              "Discover systematic ways to develop novel new processes, products and business models."
            }
            link={"methods"}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(cardsStyle)(Cards);
