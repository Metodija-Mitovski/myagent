const initState = { data: [], errorMsg: "" };

const latestPostsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_LATEST_POSTS_SUCCESS":
      return {
        data: action.payload,
        errorMsg: "",
      };

    case "GET_LATEST_POSTS_FAILURE":
      return { data: [], errorMsg: action.payload };

    default:
      return state;
  }
};

export default latestPostsReducer;
