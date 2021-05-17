import React from "react";
import "./collection-preview.styles.scss";
import Collectionitem from "../collection-item/collection-item.component";
function Collectionpreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 5)
          .map(({ id, ...otherprops }) => (
            <Collectionitem key={id} {...otherprops}></Collectionitem>
          ))}
      </div>
    </div>
  );
}

export default Collectionpreview;
