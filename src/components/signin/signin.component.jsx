import React, { Component } from "react";
import Forminput from "../form-input/form-input.component";
import Custombutton from "../custom-button/custom-button.component";
import "./signin.styles.scss";
import { auth, GoogleSignIn } from "../../firebase/firebase.utility";
import { withRouter } from "react-router-dom";
class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
    }

    this.setState({ email: "", password: "" });
    this.props.history.push("/");
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Forminput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <Forminput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <Custombutton type="submit"> Sign in </Custombutton>
            <Custombutton onClick={GoogleSignIn} isGoogleSignIn>
              Sign in with Google
            </Custombutton>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signin);
