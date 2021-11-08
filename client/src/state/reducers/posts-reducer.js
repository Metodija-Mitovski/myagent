import postConstants from "../constants/postsConstants";

const initState = {
  myPosts: [],
  latestPosts: [],
  newPost: {},
  singlePost: undefined,
  relatedPosts: [],
  wishList: [],
  errorMsg: undefined,
  relatedPostsErrMsg: undefined,
  isFetching: false,
};

const PostsReducer = (state = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case postConstants.POSTS_ACTION_START:
      return {
        ...state,
        isFetching: true,
      };

    case postConstants.GET_SINGLE_POST_SUCCESS:
      return {
        ...state,
        singlePost: payload,
        errorMsg: undefined,
        isFetching: false,
      };

    case postConstants.GET_SINGLE_POST_FAILURE:
      return {
        ...state,
        errorMsg: payload,
        isFetching: false,
      };

    case postConstants.CLEAR_SINGLE_POST:
      return {
        ...state,
        singlePost: undefined,
      };

    case postConstants.GET_LATEST_POSTS_SUCCESS:
      return {
        ...state,
        latestPosts: payload,
        errorMsg: undefined,
        isFetching: false,
      };

    case postConstants.GET_LATEST_POSTS_FAILURE:
      return {
        ...state,
        errorMsg: payload,
        isFetching: false,
      };

    case postConstants.GET_MY_POSTS_SUCCESS:
      return {
        ...state,
        myPosts: payload,
        errorMsg: undefined,
        isFetching: false,
      };

    case postConstants.GET_MY_POSTS_FAILURE:
      return {
        ...state,
        errorMsg: payload,
        isFetching: false,
      };

    case postConstants.DELETE_POST_SUCCESS:
      return {
        ...state,
        myPosts: [...state.myPosts.filter((post) => post._id !== payload)],
        isFetching: false,
        errorMsg: undefined,
      };

    case postConstants.DELETE_POST_FAILURE:
      return {
        ...state,
        errorMsg: payload,
        isFetching: false,
      };

    case postConstants.GET_RELATED_POSTS_SUCCESS:
      return {
        ...state,
        relatedPosts: payload,
        errorMsg: undefined,
        isFetching: false,
      };

    case postConstants.GET_RELATED_POSTS_FAIL:
      return {
        ...state,
        relatedPostsErrMsg: payload,
        isFetching: false,
      };

    case postConstants.ADD_POST_SUCCESS:
      return {
        ...state,
        newPost: payload,
        errorMsg: undefined,
        isFetching: false,
      };
    case postConstants.ADD_POST_FAILURE:
      return {
        ...state,
        errorMsg: payload,
        isFetching: false,
      };

    case postConstants.CLEAR_ADD_POST:
      return {
        ...state,
        newPost: {},
        errorMsg: undefined,
      };

    case postConstants.EDIT_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMsg: undefined,
      };

    case postConstants.EDIT_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMsg: payload,
      };

    default:
      return state;
  }
};

export default PostsReducer;
