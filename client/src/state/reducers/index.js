import { combineReducers } from "redux";
import postsReducer from "./posts-reducer";
import userReducer from "./user-reducer";
import latestPostsReducer from "./latest-post-reducer";
import singlePostReducer from "./single-post-reducer";

const reducers = combineReducers({
  posts: postsReducer,
  latestPosts: latestPostsReducer,
  singlePost: singlePostReducer,
  user: userReducer,
});

export default reducers;
