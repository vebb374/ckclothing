import "./App.css";
import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage.component";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Shoppage from "./pages/shop/shoppage.component.jsx";
import Header from "./components/header/header.component";
import Signinandout from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createuser } from "./firebase/firebase.utility";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SetCurrentUser } from "./redux/user/user.actions";
import { selectcurrentuser } from "./redux/user/user.selectors";
import Checkout from "./pages/checkout/checkout.component";
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
        SetCurrentUser(user);
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
          <Route path="/shop" component={Shoppage}></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
          <Route
            exact
            path="/signinandout"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/"></Redirect>
              ) : (
                <Signinandout></Signinandout>
              )
            }
          ></Route>
        </Switch>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  SetCurrentUser: (user) => dispatch(SetCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectcurrentuser,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
