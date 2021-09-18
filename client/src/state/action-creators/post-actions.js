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
        payload: "Во моментов нема нови објави",
      });
    }
  };
};
