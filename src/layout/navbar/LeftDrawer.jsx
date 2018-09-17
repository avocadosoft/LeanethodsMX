import React, { Component, Fragment } from "react";
// Material UI
import { Drawer } from "@material-ui/core";
// Components
import DrawerList from "./DrawerList";

class LeftDrawer extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
  }
  componentDidMount() {
    this.props.onClick(this.openDrawer);
  }

  openDrawer(side, open) {
    this.setState({
      [side]: open
    });
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  state = {
    left: false
  };

  render() {
    const sideList = (
      <div>
        <DrawerList />
      </div>
    );

    return (
      <Fragment>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

export default LeftDrawer;
