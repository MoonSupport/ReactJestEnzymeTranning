import { all, fork } from "redux-saga/effects";
import post from "./post";
export default function* rootSaga() {
  yield all([fork(post)]);
}
