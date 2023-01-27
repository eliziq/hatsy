import "./CartDropdown.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

const CartDropdown = () => {
  const { cartItems, totalCost, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToChekoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };
  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>
          <div className="total">
            <span>Total:</span>
            <span>${totalCost}</span>
          </div>
          <Button onClick={goToChekoutHandler}>CHECKOUT</Button>
        </>
      ) : (
        <div className="empty-message">You have no items in a cart yet.</div>
      )}
    </div>
  );
};

export default CartDropdown;
