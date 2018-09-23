import React from "react";
import PropTypes from "prop-types";
// Styles
import infoCardStyle from "../../assets/jss/infoCardStyle";
// Material UI
import {
  withStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

import { Link } from "react-router-dom";

const InfoCard = props => {
  const { classes, title, text, img, link } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={link}>
        <CardMedia
          className={classes.media}
          image={require("../../assets/img/" + img)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            className={classes.h2}
          >
            {title}
          </Typography>
          <Typography component="p" className={classes.p}>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(infoCardStyle)(InfoCard);
