export const initState = {
  _id: "",
  firstName: "",
  lastName: "",
  profileImg: {
    url: "",
    id: "",
  },
  email: "",
  isLoggedIn: false,
  posts: [],
  errorMsg: undefined,
  isFetchingPosts: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isFetchingPosts: true,
      };

    case "GET_USER_SUCCESS":
      return {
        ...state,
        _id: action.payload._id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        profileImg: action.payload.profileImg,
        email: action.payload.email,
        isLoggedIn: true,
      };

    case "GET_USER_FAILURE":
      return {
        ...state,
        ...initState,
      };

    case "USER_UPDATE":
      return {
        ...state,
        ...action.payload,
      };

    case "USER_LOGOUT":
      return {
        ...state,
        ...initState,
      };

    case "GET_MY_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
        errorMsg: undefined,
        isFetchingPosts: false,
      };

    case "GET_MY_POSTS_FAILURE":
      return {
        ...state,
        posts: [],
        errorMsg: action.payload,
        isFetchingPosts: false,
      };

    case "DELETE_POST_SUCCESS":
      const posts = state.posts.filter((post) => post._id !== action.payload);
      return {
        ...state,
        posts: posts,
        isFetchingPosts: false,
        errorMsg: undefined,
      };

    case "DELETE_POST_FAILURE":
      return {
        ...state,
        isFetchingPosts: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
