import { AnyAction } from "redux";
import { UserData } from "../../util/firebase";

import {
  signInFailed,
  signOutFailed,
  signUpFailed,
  signInSuccess,
  signOutSuccess,
} from "./userAction";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  // const { type, payload } = action;

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  if (
    signOutFailed.match(action) ||
    signInFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }
  return state;
};
