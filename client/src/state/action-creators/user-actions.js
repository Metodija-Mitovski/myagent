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
      const res = await axios.get("http://localhost:5000/user/logout", {
        withCredentials: true,
      });

      dispatch({ type: "USER_LOGOUT" });
    } catch (error) {
      console.log(error);
    }
  };
};
