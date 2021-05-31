import CartActions from "./cart.types";
export const ToggleCart = () => ({
  type: CartActions.ToggleCart,
});

export const addItem = (item) => ({
  type: CartActions.AddItem,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActions.RemoveItem,
  payload: item,
});

export const reducequnatity = (item) => ({
  type: CartActions.ReduceItem,
  payload: item,
});
