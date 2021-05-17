import "./App.css";
import React, { Component } from "react";
import Homepage from "./pages/homepage.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
