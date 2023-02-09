import { createSelector } from "reselect";
import { RootState } from "../store";
import { UserState } from "./userReducer";

export const selectUserReducer = (state:RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);

// export const selectCurrentUser = (state) => state.user.currentUser;
