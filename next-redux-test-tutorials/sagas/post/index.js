import axios from "axios";
import {
  GET_POSTS_SUCCESS,
  GET_POSTS_REQUEST,
  GET_POSTS_FAILURE
} from "../../reducers/post/reducer";

import { all, fork, call, put, takeEvery } from "redux-saga/effects";

export async function addPostAPI() {
  const result = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  return result.data;
}

export function* addPost() {
  try {
    const result = yield call(addPostAPI);
    yield put({
      type: GET_POSTS_SUCCESS,
      payload: result
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_POSTS_FAILURE,
      payload: e
    });
  }
}

function* watchAddPost() {
  yield takeEvery(GET_POSTS_REQUEST, addPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
