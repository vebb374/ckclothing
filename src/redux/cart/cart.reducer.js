import CartActions from "./cart.types";
import { Additem, ReduceItem } from "./cart.utils";
const InitialState = {
  hidden: true,
  cartitems: [],
};

const Cartreducer = (state = InitialState, action) => {
  switch (action.type) {
    case CartActions.ToggleCart:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActions.AddItem:
      return { ...state, cartitems: Additem(state.cartitems, action.payload) };
    case CartActions.ReduceItem:
      return {
        ...state,
        cartitems: ReduceItem(state.cartitems, action.payload),
      };
    case CartActions.RemoveItem:
      return {
        ...state,
        cartitems: state.cartitems.filter((c) => action.payload.id !== c.id),
      };
    default:
      return state;
  }
};

export default Cartreducer;
