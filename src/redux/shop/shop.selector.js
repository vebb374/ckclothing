import { createSelector } from "reselect";
import memoize from "lodash.memoize";
const collectionstate = (state) => state.shop;

export const shopselector = createSelector(
  [collectionstate],
  (data) => data.shopdata
);
export const collectionlistselector = createSelector(
  [shopselector],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
export const collectionselector = memoize((collectionname) =>
  createSelector([collectionstate], (data) => data.shopdata[collectionname])
);
