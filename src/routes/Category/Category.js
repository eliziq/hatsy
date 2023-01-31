import { Title, CategoryPageContainer } from "./CategoryStyle";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categorySelector";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title> {category.toUpperCase()}</Title>
      <CategoryPageContainer>
        {products &&
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </CategoryPageContainer>
    </>
  );
};

export default Category;
