import { createSelector } from "reselect";
const cartstate = (state) => state.cart;

export const CartItems = createSelector([cartstate], (cart) => cart.cartitems);

export const CartCount = createSelector(CartItems, (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0)
);
