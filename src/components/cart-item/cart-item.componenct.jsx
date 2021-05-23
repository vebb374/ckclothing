import React from "react";
import "./cart-item.styles.scss";
function Cartitem({ name, imageUrl, price, quantity }) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={`${name}`}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {price} x {quantity}
        </span>
      </div>
    </div>
  );
}

export default Cartitem;
