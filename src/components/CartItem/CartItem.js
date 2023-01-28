// import "./CartItem.scss";
import {
  CartItemContainer,
  ItemDetails,
  Numbers,
  Price,
  Quantity
} from "./CartItemStyle";

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <h2 className="name">{name}</h2>
        <Numbers>
          <Quantity>{`${quantity} pcs`}</Quantity>
          <Price> ${quantity * price}</Price>
        </Numbers>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
