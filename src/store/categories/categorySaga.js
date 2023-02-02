import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../util/firebase";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categoryAction";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
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
