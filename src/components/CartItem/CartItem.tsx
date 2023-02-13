import { FC, memo } from "react";
import { CartItem as TCartItem } from "../../store/cart/cartTypes";
import {
  CartItemContainer,
  ItemDetails,
  Numbers,
  Price,
  Quantity,
} from "./CartItemStyle";

type CartItemProps = {
  product: TCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ product }) => {
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
});

export default CartItem;
