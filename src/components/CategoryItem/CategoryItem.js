import React from "react";
import "./CategoryItem.scss";

const CategoryItem = ({ category }) => {
  return (
    <div className="category-container">
      <img src={category.imageUrl} className="background-image" alt="" />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
