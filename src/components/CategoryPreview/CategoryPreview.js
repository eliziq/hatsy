import "./CategoryPreview.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const goToCategoryHandler = () => {
    navigate(`${title}`);
  };
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={goToCategoryHandler}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
