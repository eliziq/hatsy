import { FC } from "react";
import { Preview, PreviewContainer } from "./CategoryPreviewStyle";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { CategoryItem } from "../../store/categories/categoryTypes";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  const navigate = useNavigate();
  const goToCategoryHandler = () => {
    navigate(`${title}`);
  };
  return (
    <PreviewContainer>
      <h2>
        <span className="title" onClick={goToCategoryHandler}>
          {title.toUpperCase()}
        </span>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Preview>
    </PreviewContainer>
  );
};

export default CategoryPreview;
