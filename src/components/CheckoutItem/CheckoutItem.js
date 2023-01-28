import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  Arrow,
  BaseSpan,
  RemoveBtn,
} from "./CheckoutItemStyle";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeItemFromCart(item);
  const clearItemHandler = () => clearItemFromCart(item);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <span>{quantity}</span>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>${price}</BaseSpan>
      <RemoveBtn onClick={clearItemHandler}>&#10005;</RemoveBtn>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
