import "./Directory.scss";
import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";

const Directory = () => {
  const { categoriesDescription } = useContext(CategoriesContext);
  const categories = categoriesDescription.sort((a, b) => a.id - b.id);

  return (
    <div className="directory-container">
      {categories &&
        categories.map((category) => (
          <DirectoryItem category={category} key={category.id} />
        ))}
    </div>
  );
};

export default Directory;
