import "./CategoryItem.scss";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const goToCategoryHandler = () => {
    navigate(`shop/${category.title.toLowerCase()}`);
  };
  return (
    <div onClick={goToCategoryHandler} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
