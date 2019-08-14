import { combineReducers } from "redux";
import posts from "./post/reducer";

const reducers = combineReducers({
  posts
});

export default reducers;
