import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cartAction";
import { selectCartItems } from "../../store/cart/cartSelector";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import {
  ProductCardContainer,
  StyledFooter,
  StyledImg,
} from "./ProductCardStyle";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <StyledImg src={imageUrl} alt={name} />
      <StyledFooter>
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </StyledFooter>
      <Button
        onClick={addProductToCart}
        btn_type={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
