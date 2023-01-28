// import "./ProductCard.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import {
  ProductCardContainer,
  StyledFooter,
  StyledImg,
} from "./ProductCardStyle";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
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
