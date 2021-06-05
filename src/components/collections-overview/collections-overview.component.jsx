import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Collectionpreview from "../collection-preview/collection-preview.component";
import { collectionlistselector } from "../../redux/shop/shop.selector";

function Collectionoverview({ collections }) {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherprops }) => (
        <Collectionpreview key={id} {...otherprops}></Collectionpreview>
      ))}
    </div>
  );
}

const mapstateToProps = createStructuredSelector({
  collections: collectionlistselector,
});
export default connect(mapstateToProps)(Collectionoverview);
