import React, { Component } from "react";

// Material UI
import { Button } from "@material-ui/core";
// React Router
import { Link } from "react-router-dom";

class Method extends Component {
  render() {
    const { classes, img } = this.props;
    return (
      <div className={classes}>
        <img
          src={require("../../assets/img/" + img + ".png")}
          alt={this.props.img}
        />
        <h1>{this.props.name}</h1>
        <p>{this.props.text}</p>
        <Button
          size="medium"
          color="primary"
          component={Link}
          to={this.props.link}
          variant="outlined"
        >
          Learn More
        </Button>
      </div>
    );
  }
}

export default Method;
