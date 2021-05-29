import { createSelector } from "reselect";
const cartstate = (state) => state.cart;

export const CartItems = createSelector([cartstate], (cart) => cart.cartitems);
export const Hidden = createSelector([cartstate], (cart) => cart.hidden);
export const CartCount = createSelector(CartItems, (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0)
);
export const CartTotal = createSelector(CartItems, (items) =>
  items.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
