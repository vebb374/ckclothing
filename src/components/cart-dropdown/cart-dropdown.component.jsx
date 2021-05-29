import React from "react";
import Custombutton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import Cartitem from "../cart-item/cart-item.componenct";
import { CartItems } from "../../redux/cart/cart.selectors";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ToggleCart } from "../../redux/cart/cart.actions";
function Cartdropdown({ cartitems, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartitems.length ? (
          cartitems.map(({ id, ...otherprops }) => (
            <Cartitem key={id} {...otherprops}></Cartitem>
          ))
        ) : (
          <span className="empty-cart">Add Some Items To Cart</span>
        )}
      </div>
      <Link to={"/checkout"}>
        <Custombutton onClick={() => dispatch(ToggleCart())}>
          GO TO CHECKOUT
        </Custombutton>
      </Link>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  cartitems: CartItems,
});
export default connect(mapStateToProps)(Cartdropdown);
