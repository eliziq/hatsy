import { DirectoryContainer } from "./DirectoryStyle";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import DirectoryItem from "../DirectoryItem/DirectoryItem";

const Directory = () => {
  const { categoriesDescription } = useContext(CategoriesContext);
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
