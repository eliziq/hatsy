import {
  DirectoryItemContainer,
  BackgroundImage,
  CategoryBodyContainer,
} from "./DirectoryItemStyle";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const goToCategoryHandler = () => {
    navigate(`shop/${category.title.toLowerCase()}`);
  };
  return (
    <DirectoryItemContainer onClick={goToCategoryHandler}>
      <BackgroundImage imageUrl={category.imageUrl} />
      <CategoryBodyContainer>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
