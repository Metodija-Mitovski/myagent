import axios from "axios";

export const getCurrentUser = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:5000/user/current", {
        withCredentials: true,
      });

      if (res.status === 200) {
        dispatch({ type: "GET_USER_SUCCESS", payload: res.data });
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatch({ type: "GET_USER_FAILURE" });
    }
  };
};

export const updateUser = (userData) => {
  return (dispatch) => {
    dispatch({ type: "USER_UPDATE", payload: userData });
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    try {
      await axios.get("http://localhost:5000/user/logout", {
        withCredentials: true,
      });

      dispatch({ type: "USER_LOGOUT" });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMyPosts = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await axios.get("http://localhost:5000/posts/my-posts", {
        withCredentials: true,
      });

      if (res.status === 200) {
        dispatch({ type: "GET_MY_POSTS_SUCCESS", payload: res.data });
        return;
      }

      throw new Error("грешка, обдете се повторно");
    } catch (error) {
      if (!error.response) {
        dispatch({
          type: "GET_MY_POSTS_FAILURE",
          payload: error.message,
        });
        return;
      } else {
        dispatch({
          type: "GET_MY_POSTS_FAILURE",
          payload: error.response.data,
        });
      }
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await axios.delete(`http://localhost:5000/posts/${postId}`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        dispatch({ type: "DELETE_POST_SUCCESS", payload: postId });
        return;
      }
      throw new Error("грешка обидете се повторно");
    } catch (error) {
      if (!error.response) {
        dispatch({
          type: "DELETE_POST_FAILURE",
          payload: error.message,
        });
        return;
      }

      dispatch({
        type: "DELETE_POST_FAILURE",
        payload: error.response.message,
      });
    }
  };
};
