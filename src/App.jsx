import React, { Component, Fragment } from "react";
import { Navbar, Footer } from "./layout";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./assets/jss/colors";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import { Landing } from "./components";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
