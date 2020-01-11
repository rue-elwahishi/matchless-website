import { createSelector } from "reselect";

const selectCurrentAuth = state => state.auth;
export const selectAuth = createSelector([selectCurrentAuth], auth => auth);
