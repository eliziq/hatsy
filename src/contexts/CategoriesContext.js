import { useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../util/firebase.js";

// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  categoriesDescription: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [categoriesDescription, setCategoriesDescription] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      setCategoriesMap(categories.categoryMap);
      setCategoriesDescription(categories.categoryDescription);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap, categoriesDescription };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
