import { combineReducers } from "redux";
import postsReducer from "./posts-reducer";
import userReducer from "./user-reducer";

const reducers = combineReducers({
  posts: postsReducer,
  user: userReducer,
});

export default reducers;
