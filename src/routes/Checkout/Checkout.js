import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalContainer,
} from "./CheckoutStyles";

const Checkout = () => {
  const { cartItems, totalCost } = useContext(CartContext);
  const headers = ["Product", "Description", "Quantity", "Price", "Remove"];

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {headers.map((header) => (
          <HeaderBlock>
            <span>{header}</span>
          </HeaderBlock>
        ))}
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.name} item={item} />
      ))}
      <TotalContainer>
        <span>Total:</span>
        <span>${totalCost}</span>
      </TotalContainer>
    </CheckoutContainer>
  );
};

export default Checkout;
