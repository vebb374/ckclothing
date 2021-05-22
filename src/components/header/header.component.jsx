import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utility";
import "./header.styles.scss";
import { connect } from "react-redux";
import Carticon from "../cart-icon/cart-icon.component";
import Cartdropdown from "../cart-dropdown/cart-dropdown.component";
import ToggleCart from "../../redux/cart/cart.actions";
function Header({ currentUser, hidden, ToggleCart }) {
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
        <Carticon onClick={ToggleCart}></Carticon>
      </div>
      {hidden ? null : <Cartdropdown></Cartdropdown>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentuser,
  hidden: state.cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
  ToggleCart: () => dispatch(ToggleCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
