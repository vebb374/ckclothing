import React, { Component } from "react";
import Collectionpreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";
export class Shoppage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shoppage">
        {this.state.collections.map(({ id, ...otherprops }) => (
          <Collectionpreview key={id} {...otherprops}></Collectionpreview>
        ))}
      </div>
    );
  }
}

export default Shoppage;
