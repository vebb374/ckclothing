import React from "react";
import Custombutton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import Cartitem from "../cart-item/cart-item.componenct";
function Cartdropdown({ cartitems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartitems.map(({ id, ...otherprops }) => (
          <Cartitem key={id} {...otherprops}></Cartitem>
        ))}
      </div>
      <Custombutton>GO TO CHECKOUT</Custombutton>
    </div>
  );
}
const mapStateToProps = ({ cart: { cartitems } }) => ({
  cartitems: cartitems,
});
export default connect(mapStateToProps)(Cartdropdown);
