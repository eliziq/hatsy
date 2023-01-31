import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categorySelector";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
