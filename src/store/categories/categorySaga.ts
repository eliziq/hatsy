import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { getCategoriesAndDocuments } from "../../util/firebase";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categoryAction";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

//watcher
export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  //Run everything inside and only complete when all of it is done
  yield all([call(onFetchCategories)]);
}
