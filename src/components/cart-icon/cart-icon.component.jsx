import React from "react";
import { ReactComponent as Cartlogo } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { ToggleCart } from "../../redux/cart/cart.actions";
import { CartCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
function Carticon({ ToggleCart, cartcount }) {
  return (
    <div className="cart-icon" onClick={ToggleCart}>
      <Cartlogo className="shopping-icon"></Cartlogo>
      <span className="item-count">{cartcount}</span>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  ToggleCart: () => dispatch(ToggleCart()),
});

const mapstateToProps = createStructuredSelector({
  cartcount: CartCount,
});
export default connect(mapstateToProps, mapDispatchToProps)(Carticon);
