import {
  DropdownContainer,
  CartItems,
  EmptyMessage,
  Total,
} from "./CartDropdownStyle";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

const CartDropdown = () => {
  const { cartItems, totalCost, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
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
