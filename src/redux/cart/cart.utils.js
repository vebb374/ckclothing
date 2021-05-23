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
