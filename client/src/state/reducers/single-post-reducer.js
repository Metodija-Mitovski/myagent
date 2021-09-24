const initState = {
  postData: {},
  relatedPosts: [],
  errorMsg: "",
  isFetching: true,
};

const singlePostReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_SINGlE_POST_SUCCESS":
      return { ...state, postData: action.payload, isFetching: false };

    case "GET_SINGLE_POST_FAILURE":
      return {
        ...state,
        errorMsg: action.payload,
        postData: {},
        relatedPosts: [],
        isFetching: false,
      };

    default:
      return state;
  }
};

export default singlePostReducer;
