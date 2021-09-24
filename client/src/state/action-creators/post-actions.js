import axios from "axios";

export const getLatestPosts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:5000/posts/latest");

      if (res.status === 200) {
        dispatch({ type: "GET_LATEST_POSTS_SUCCESS", payload: res.data });
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatch({
        type: "GET_LATEST_POSTS_FAILURE",
        payload: "Во моментов достапни објави",
      });
    }
  };
};

export const getSinglePost = (postId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:5000/posts/${postId}`);

      if (res.status === 200) {
        dispatch({ type: "GET_SINGlE_POST_SUCCESS", payload: res.data });
        return;
      }

      throw new Error("Постот не е пронајден");
    } catch (error) {
      if (!error.response) {
        dispatch({ type: "GET_SINGLE_POST_FAILURE", payload: error.message });
        return;
      }

      dispatch({
        type: "GET_SINGLE_POST_FAILURE",
        payload: error.response.data,
      });
    }
  };
};
