import React from "react";
import Custombutton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
function Cartdropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Custombutton>GO TO CHECKOUT</Custombutton>
    </div>
  );
}

export default Cartdropdown;
