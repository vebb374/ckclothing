import "./App.css";
import React, { Component } from "react";
import Homepage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shoppage from "./pages/shop/shoppage.component.jsx";
import Header from "./components/header/header.component";
import Signinandout from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createuser } from "./firebase/firebase.utility";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentuser: null,
    };
  }
  unsubscribefromauth = null;
  componentDidMount() {
    this.unsubscribefromauth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userref = await createuser(user);

        userref.onSnapshot((snapshot) => {
          this.setState(
            {
              currentuser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            }
            // ,() => console.log(this.state)
          );
        });
      } else {
        this.setState({ currentuser: user });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribefromauth();
  }

  render() {
    return (
      <Router>
        <Header user={this.state.currentuser}></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={Shoppage}></Route>
          <Route exact path="/signinandout" component={Signinandout}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
