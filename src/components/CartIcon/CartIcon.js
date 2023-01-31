import { useSelector, useDispatch } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cartSelector";

import { setIsCartOpen } from "../../store/cart/cartAction";

import { ItemCount, CartIconContainer, ShoppingIcon } from "./CartIconStyle";

const CartIcon = () => {

  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
