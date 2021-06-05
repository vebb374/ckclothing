import React from "react";
import Collectionsoverview from "../../components/collections-overview/collections-overview.component";
import Collection from "../collection-page/collection.component";
import { Route } from "react-router-dom";
export const Shoppage = ({ match }) => {
  console.log(match);

  return (
    <div className="shoppage">
      <Route
        exact
        path={`${match.path}`}
        component={Collectionsoverview}
      ></Route>
      <Route path={`${match.path}/:category`} component={Collection}></Route>
    </div>
  );
};

export default Shoppage;
