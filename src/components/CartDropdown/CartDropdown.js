import "./CartDropdown.scss";
import { useContext, useEffect, Fragment } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

const CartDropdown = () => {
  const { cartItems, totalCost } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      {cartItems.length ? (
        <Fragment>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </div>
          <div className="total">
            <span>Total:</span>
            <span>${totalCost}</span>
          </div>
        </Fragment>
      ) : (
        <div className="empty-message">You have no items in a cart yet.</div>
      )}
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
