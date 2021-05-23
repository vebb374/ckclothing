import CartActions from "./cart.types";
export const ToggleCart = () => ({
  type: CartActions.ToggleCart,
});

export const addItem = (item) => ({
  type: CartActions.AddItem,
  payload: item,
});
