import React, { Component } from "react";
import "./signup.styles.scss";
import { auth, createuser } from "../../firebase/firebase.utility";
import Custombutton from "../custom-button/custom-button.component";
import Forminput from "../form-input/form-input.component";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    let { Password, ConfirmPassword, Email, displayName } = this.state;
    if (Password !== ConfirmPassword) {
      alert("Passwords do not match, try again");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        Email,
        Password
      );
      await createuser(user, { displayName });
      this.setState({
        displayName: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
      });
    } catch (error) {
      console.log("error occured", error.message);
    }
  };

  render() {
    const { displayName, Email, Password, ConfirmPassword } = this.state;
    return (
      <div className="signup">
        <h2 className="title">I dont have an account</h2>
        <form className="sign-up-from">
          <Forminput
            name="displayName"
            type="text"
            value={displayName}
            onChange={this.handleChange}
            label="Name"
            required
          ></Forminput>
          <Forminput
            name="Email"
            type="email"
            value={Email}
            onChange={this.handleChange}
            label="Email"
            required
          ></Forminput>
          <Forminput
            name="Password"
            type="password"
            value={Password}
            onChange={this.handleChange}
            label="Password"
            required
          ></Forminput>
          <Forminput
            name="ConfirmPassword"
            type="password"
            value={ConfirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          ></Forminput>
          <Custombutton type="submit" onClick={this.onSubmit}>
            SIGN UP
          </Custombutton>
        </form>
      </div>
    );
  }
}

export default Signup;
