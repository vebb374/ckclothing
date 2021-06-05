import React from "react";
import "./checkout.styles.scss";
import { CartTotal, CartItems } from "../../redux/cart/cart.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Stripecheckoutbutton from "../../components/stripe-button/stripe-button.component";
import Checkoutitem from "../../components/checkout-item/checkoutitem.component";
function Checkout({ cartitems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartitems.map((cartItem) => (
        <Checkoutitem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <Stripecheckoutbutton price={total}></Stripecheckoutbutton>
    </div>
  );
}

const mapstateToProps = createStructuredSelector({
  total: CartTotal,
  cartitems: CartItems,
});
export default connect(mapstateToProps)(Checkout);
