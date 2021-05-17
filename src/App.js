import "./App.css";
import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shoppage from "./pages/shop/shoppage.component.jsx";
import Header from "./components/header/header.component";
export class App extends Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={Shoppage}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
