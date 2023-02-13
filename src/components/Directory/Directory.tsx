import { DirectoryContainer } from "./DirectoryStyle";
import { useSelector } from "react-redux";
import { selectCategoriesDesc } from "../../store/categories/categorySelector";
import DirectoryItem from "../DirectoryItem/DirectoryItem";

const Directory = () => {
  const categoriesDescription = useSelector(selectCategoriesDesc);
  const categories = categoriesDescription.sort((a, b) => a.id - b.id);

  return (
    <DirectoryContainer>
      {categories &&
        categories.map((category) => (
          <DirectoryItem category={category} key={category.id} />
        ))}
    </DirectoryContainer>
  );
};

export default Directory;
