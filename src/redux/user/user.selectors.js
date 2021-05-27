import { createSelector } from "reselect";
const userstate = (state) => state.user;

export const selectcurrentuser = createSelector(
  userstate,
  (user) => user.currentuser
);
