import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  removeItem,
  addItem,
  reducequnatity,
} from "../../redux/cart/cart.actions";

const Checkoutitem = ({ cartItem, dispatch }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div
          className="arrow"
          onClick={() => dispatch(reducequnatity(cartItem))}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeItem(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null)(Checkoutitem);
