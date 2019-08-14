import { GET_POSTS_SUCCESS } from "../../reducers/post/reducer";

import { call, put } from "redux-saga/effects";

import { addPost, addPostAPI } from "../../sagas/post";

describe("Posts Reducer", () => {
  it("정상적으로 동기 실행을 한다.", () => {
    const iterator = addPost();
    expect(iterator.next().value).toEqual(call(addPostAPI));
    expect(iterator.next().value).toEqual(
      put({
        type: GET_POSTS_SUCCESS,
        payload: undefined
      })
    );
  });
});
