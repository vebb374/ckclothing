import CartActions from "./cart.types";
import { Additem } from "./cart.utils";
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
    default:
      return { ...state };
  }
};

export default Cartreducer;
