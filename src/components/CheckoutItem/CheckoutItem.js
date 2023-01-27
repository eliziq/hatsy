import "./CheckoutItem.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ReactComponent as Increase } from "../../assets/arrow-up.svg";
import { ReactComponent as Decrease } from "../../assets/arrow-down.svg";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemFromCart(item);
  const clearItemHandler = () => clearItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <Decrease className="arrow" onClick={removeItemHandler} />
        <span className="value">{quantity}</span>
        <Increase className="arrow" onClick={addItemHandler} />
      </div>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
