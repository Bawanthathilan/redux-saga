import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:5000/prodcuts");
  data = yield data.json();
  console.log("DATA", data);

  yield put({
    type: SET_PRODUCT_LIST,
    data,
  });
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:5000/prodcuts?q=${data.query}`);
  result = yield result.json();
  console.log("DATA", result);

  yield put({ type: SET_PRODUCT_LIST, data: result });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;
