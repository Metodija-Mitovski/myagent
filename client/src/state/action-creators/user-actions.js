import axios from "axios";
import userConstants from "../constants/userConstants";
import api from "../../api/api";

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

//// logout

export const userLogout = () => {
  return async (dispatch) => {
    try {
      await axios.get(`${api.rootUser}/logout`, {
        withCredentials: true,
      });

      dispatch({ type: userConstants.LOG_OUT });
    } catch (error) {
      console.log(error);
    }
  };
};

//// update user data

export const updateAccDataSuccess = (data) => {
  return {
    type: userConstants.UPDATE_ACCOUNT_SUCCESS,
    payload: data,
  };
};

export const updateAccDataFail = (error) => {
  return {
    type: userConstants.UPDATE_ACCOUNT_FAIL,
    payload: error,
  };
};

export const updateAccDataRequest = (userData) => {
  return async (dispatch) => {
    dispatch(userActionStart());

    try {
      const res = await axios.patch(`${api.rootUser}/update`, userData, {
        withCredentials: true,
      });

      if (res.status === 200) {
        dispatch(updateAccDataSuccess(res.data));
      }
    } catch (error) {
      if (!error.response) {
        return;
      }
      if (error.response.data.code === 11000) {
        return dispatch(
          updateAccDataFail({
            email: { message: "и-мејлот е претходно регистриран" },
          })
        );
      }

      dispatch(updateAccDataFail(error.response.data));
    }
  };
};

export const clearUpdateAccErr = () => {
  return (dispatch) => {
    dispatch({ type: userConstants.UPDATE_ACCOUNT_CLEAR_ERRORS });
  };
};

//// delete account

export const deleteAccountSuccess = () => {
  return {
    type: userConstants.DELETE_ACCOUNT_SUCCESS,
  };
};
export const deleteAccountFail = (error) => {
  return {
    type: userConstants.DELETE_ACCOUNT_FAIL,
    payload: error,
  };
};
export const deleteAccountRequest = (password) => {
  return async (dispatch) => {
    dispatch(userActionStart());

    try {
      const res = await axios.delete(
        `${api.rootUser}/delete`,
        // set body with delete req in axios sec param must be object with data
        { data: { password }, withCredentials: true }
      );

      if (res.status === 204) {
        return dispatch(deleteAccountSuccess());
      }
    } catch (error) {
      dispatch(deleteAccountFail(error.response.data));
    }
  };
};
