import CartActions from "./cart.types";

const InitialState = {
  hidden: true,
};

const Cartreducer = (state = InitialState, action) => {
  switch (action.type) {
    case CartActions.ToggleCart:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return { ...state };
  }
};

export default Cartreducer;
