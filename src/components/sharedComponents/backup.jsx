import React, { Component } from "react";
import PropTypes from "prop-types";
// Styles
import cardStyle from "../../assets/jss/cardStyle";
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

function MediaCard(props) {
  const { classes, title, text, img, link } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={link}>
        <CardMedia
          className={classes.media}
          image={require("../../assets/img/card-lean.jpg")}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">{text}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(cardStyle)(MediaCard);
