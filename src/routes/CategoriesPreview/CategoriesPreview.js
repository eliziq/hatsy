import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/categorySelector";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import Spinner from "../../components/Spinner/Spinner";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
