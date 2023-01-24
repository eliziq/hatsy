import "./ProductCard.scss";
import Button from "../Button/Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button btn_type="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;