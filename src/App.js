import "./App.css";
import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shoppage from "./pages/shop/shoppage.component.jsx";
import Header from "./components/header/header.component";
import Signinandout from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createuser } from "./firebase/firebase.utility";
import { connect } from "react-redux";
import { SetCurrentUser } from "./redux/user/user.actions";
class App extends Component {
  unsubscribefromauth = null;
  componentDidMount() {
    const { SetCurrentUser } = this.props;
    this.unsubscribefromauth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userref = await createuser(user);

        userref.onSnapshot((snapshot) => {
          SetCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        SetCurrentUser({ user });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribefromauth();
  }

  render() {
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={Shoppage}></Route>
          <Route exact path="/signinandout" component={Signinandout}></Route>
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  SetCurrentUser: (user) => dispatch(SetCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
