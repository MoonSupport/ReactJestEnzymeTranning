import { createAction, handleActions } from "redux-actions";

export const initialState = {
  posts: []
};

export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPostsAction = createAction(
  GET_POSTS_REQUEST,
  payload => payload
);

export default handleActions(
  {
    [GET_POSTS_REQUEST]: (state, action) => {
      return {
        ...state
      };
    },
    [GET_POSTS_SUCCESS]: (state, action) => {
      return {
        ...state,
        posts: action.payload
      };
    },
    [GET_POSTS_FAILURE]: (state, action) => {
      return {
        ...state
      };
    }
  },
  initialState
);
