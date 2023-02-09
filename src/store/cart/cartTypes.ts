import { CategoryItem } from "../categories/categoryTypes";

export enum CART_ACTION_TYPES {
  TOGGLE_IS_CART_OPEN = "TOGGLE_IS_CART_OPEN",
  SET_CART_ITEMS = "SET_CART_ITEMS",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
