import userActions from "./useraction.types.js";
export const SetCurrentUser = (user) => ({
  type: userActions.SET_CURRENT_USER,
  payload: user,
});
