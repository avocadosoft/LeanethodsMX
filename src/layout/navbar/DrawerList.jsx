import React from "react";
import PropTypes from "prop-types";
// Styles
import drawerListStyle from "../../assets/jss/drawerListStyle";
// Material UI
import {
  withStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
// Icons
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import SchoolIcon from "@material-ui/icons/School";
import SettingsIcon from "@material-ui/icons/Settings";
import BookIcon from "@material-ui/icons/Book";
import InfoIcon from "@material-ui/icons/Info";
import PeopleIcon from "@material-ui/icons/People";
// React Router
import { Link } from "react-router-dom";

const SimpleList = props => {
  const { classes } = props;
  return (
    <List component="nav" className={classes.root}>
      <ListItem button component={Link} to="/" className={classes.link}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem button component={Link} to="/" className={classes.link}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Methods" />
      </ListItem>

      <ListItem button component={Link} to="/" className={classes.link}>
        <ListItemIcon>
          <MessageIcon />
        </ListItemIcon>
        <ListItemText primary="Consulting & Faculting" />
      </ListItem>

      <ListItem button component={Link} to="/" className={classes.link}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Training" />
      </ListItem>

      <ListItem button component={Link} to="/" className={classes.link}>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Insights & Resources" />
      </ListItem>

      <ListItem button component={Link} to="/" className={classes.link}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>

      <ListItem button component={Link} to="/" className={classes.link}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );
};

drawerListStyle.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(drawerListStyle)(SimpleList);
