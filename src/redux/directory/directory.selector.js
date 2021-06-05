import { createSelector } from "reselect";
const selectdirectory = (state) => state.directory;

export const directoryitems = createSelector(
  selectdirectory,
  (directory) => directory.sections
);
