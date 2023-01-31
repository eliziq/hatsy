import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";
import { createAction } from "../../util/reducer";

export const setCategories = (categories) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

