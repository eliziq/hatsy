import { Title, CategoryPageContainer } from "./CategoryStyle";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
