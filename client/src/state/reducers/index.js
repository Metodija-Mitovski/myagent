import { combineReducers } from "redux";
import postsReducer from "./posts-reducer";
import userReducer from "./user-reducer";

const reducers = combineReducers({
  postsReducer: postsReducer,
  user: userReducer,
});

export default reducers;
