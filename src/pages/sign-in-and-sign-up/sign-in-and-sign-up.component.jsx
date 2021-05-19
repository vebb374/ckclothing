import React from "react";
import Signin from "../../components/signin/signin.component";
import Signup from "../../components/signup/signup.component";
import "./sign-in-and-sign-up.styles.scss";

function Signinandout() {
  return (
    <div className="Signinandout">
      <Signin></Signin>
      <Signup></Signup>
    </div>
  );
}

export default Signinandout;
