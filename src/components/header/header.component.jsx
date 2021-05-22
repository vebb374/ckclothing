import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utility";
import "./header.styles.scss";
import { connect } from "react-redux";
function Header({ currentUser }) {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/" className="option">
          <Logo></Logo>
        </Link>
      </div>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentuser,
});
export default connect(mapStateToProps)(Header);
