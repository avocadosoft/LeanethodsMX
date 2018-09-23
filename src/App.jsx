import React, { Component, Fragment } from "react";
import { Navbar, Footer } from "./layout";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./assets/jss/colors";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import { Landing, Methods, Consulting, About, Resources } from "./components";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/methods" component={Methods} />
              <Route exact path="/consulting" component={Consulting} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/about" component={About} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
