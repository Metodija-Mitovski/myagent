import axios from "axios";
import userConstants from "../constants/userConstants";
import api from "../../api/api";

///////////////////////////////////////////////////////////////

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
/////////////////////////////////////////////////////

export const userActionStart = () => {
  return {
    type: userConstants.USER_ACTION_START,
  };
};

//////// login
export const loginSuccess = (user) => {
  return {
    type: userConstants.POST_LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: userConstants.POST_LOGIN_FAIL,
    payload: error,
  };
};

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(userActionStart());
    try {
      const response = await axios.post(
        `${api.rootUser}/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        dispatch(loginSuccess(response.data.user));
      } else {
        throw new Error();
      }
    } catch (error) {
      if (!error.response) {
        error.message = "грешка, обидете се повторно";
        dispatch(loginFailure(error.message));
        return;
      }

      dispatch(loginFailure(error.response.data));
    }
  };
};

/////// authenticate

export const authenticationSuccess = (data) => {
  return {
    type: userConstants.AUTHENTICATION_SUCCESS,
    payload: data,
  };
};
export const authenticationFail = (error) => {
  return {
    type: userConstants.AUTHENTICATION_FAIL,
    payload: error,
  };
};
export const authenticationRequest = () => {
  return async (dispatch) => {
    dispatch(userActionStart());

    try {
      const res = await axios.get(`${api.rootUser}/current`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        dispatch(authenticationSuccess(res.data));
        return true;
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatch(authenticationFail(error));
      return false;
    }
  };
};
