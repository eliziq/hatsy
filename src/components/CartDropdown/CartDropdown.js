import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  DropdownContainer,
  CartItems,
  EmptyMessage,
  Total,
} from "./CartDropdownStyle";
import {
  selectCartItems,
  selectTotalCost,
} from "../../store/cart/cartSelector";
import { setIsCartOpen } from "../../store/cart/cartAction";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(selectCartItems);
  const totalCost = useSelector(selectTotalCost);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  };
  return (
    <DropdownContainer>
      {cartItems.length ? (
        <>
          <CartItems>
            {cartItems.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </CartItems>
          <Total>
            <span>Total:</span>
            <span>${totalCost}</span>
          </Total>
          <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
        </>
      ) : (
        <EmptyMessage>You have no items in a cart yet.</EmptyMessage>
      )}
    </DropdownContainer>
  );
};

export default CartDropdown;
