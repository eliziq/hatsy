import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoriesState } from "./categoryReducer";
import { CategoryDesc, CategoryMap} from "./categoryTypes";

const selectCategoryReducer = (state:RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesDesc = createSelector(
  [selectCategories],
  (categories): CategoryDesc[] =>
    categories.reduce((acc, category) => {
      const { title, id, imageUrl } = category;
      acc = [...acc, { id: id, title: title, imageUrl: imageUrl }];
      return acc;
    }, [] as CategoryDesc[])
);

export const selectIsCategoriesLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
