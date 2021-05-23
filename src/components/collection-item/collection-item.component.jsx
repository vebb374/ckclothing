import React from "react";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import "./collection-item.styles.scss";
import Custombutton from "../custom-button/custom-button.component";
const Collectionitem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Custombutton isInverted onClick={()=>addItem(item)}>Add to cart</Custombutton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Collectionitem);
