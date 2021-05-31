export const Additem = (cartitems, item) => {
  const isthere = cartitems.find((cartitem) => cartitem.id === item.id);
  if (isthere) {
    return cartitems.map((cartitem) =>
      item.id === cartitem.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }
  return [...cartitems, { ...item, quantity: 1 }];
};

export const ReduceItem = (cartitems, item) => {
  const existingCartItem = cartitems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem.quantity === 1) {
    return cartitems.filter((cartItem) => cartItem.id !== item.id);
  }

  return cartitems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
