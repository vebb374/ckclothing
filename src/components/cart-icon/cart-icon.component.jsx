import React from "react";
import { ReactComponent as Cartlogo } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { ToggleCart } from "../../redux/cart/cart.actions";
function Carticon({ ToggleCart }) {
  return (
    <div className="cart-icon" onClick={ToggleCart}>
      <Cartlogo className="shopping-icon"></Cartlogo>
      <span className="item-count">0</span>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  ToggleCart: () => dispatch(ToggleCart()),
});
export default connect(null, mapDispatchToProps)(Carticon);
