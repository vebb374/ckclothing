import React from "react";
import { collectionselector } from "../../redux/shop/shop.selector";
import Collectionitem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";
import { connect } from "react-redux";
const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <Collectionitem key={item.id} item={item}></Collectionitem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownprops) => ({
  collection: collectionselector(ownprops.match.params.category)(state),
});
export default connect(mapStateToProps)(Collection);
