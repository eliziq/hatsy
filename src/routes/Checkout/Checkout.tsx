import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectTotalCost,
} from "../../store/cart/cartSelector";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalContainer,
} from "./CheckoutStyles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalCost = useSelector(selectTotalCost);

  const headers = ["Product", "Description", "Quantity", "Price", "Remove"];

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {headers.map((header) => (
          <HeaderBlock key={header}>
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
      <PaymentForm/>
    </CheckoutContainer>
  );
};

export default Checkout;
