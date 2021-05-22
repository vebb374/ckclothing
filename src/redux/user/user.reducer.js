import userActions from "./useraction.types.js";

const INITIAL_STATE = {
  currentuser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActions.SET_CURRENT_USER:
      return {
        ...state,
        currentuser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
