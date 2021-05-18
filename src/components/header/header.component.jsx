import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utility";
import "./header.styles.scss";
function Header({ user }) {
  return (
    <div className="header">
      <div className="logo-container">
        <Logo></Logo>
      </div>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {user ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signinandout">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
