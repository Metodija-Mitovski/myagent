import userConstants from "../constants/userConstants";

const initState = {
  _id: "",
  firstName: "",
  lastName: "",
  profileImg: {
    url: "",
    id: "",
  },
  email: "",
  isLoggedIn: false,
  errorMsg: undefined,
  isFetching: false,
};

const userReducer = (state = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case userConstants.USER_ACTION_START:
      return {
        ...state,
        isFetching: true,
      };

    case userConstants.POST_LOGIN_SUCCESS:
      window.location.href = "/";
      return {
        ...state,
        isLoggedIn: true,
        firstName: payload.firstName,
        lastName: payload.lastName,
        isFetching: false,
        errorMsg: undefined,
      };

    case userConstants.POST_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isFetching: false,
        errorMsg: payload,
      };

    case userConstants.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        _id: payload._id,
        firstName: payload.firstName,
        lastName: payload.lastName,
        profileImg: payload.profileImg,
        email: payload.email,
        isLoggedIn: true,
        isFetching: false,
      };

    case userConstants.AUTHENTICATION_FAIL:
      return {
        ...state,
        ...initState,
      };

    case userConstants.UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        ...payload,
        isFetching: false,
        errorMsg: undefined,
      };

    case userConstants.UPDATE_ACCOUNT_FAIL:
      return {
        ...state,
        errorMsg: payload,
        isFetching: false,
      };

    case userConstants.UPDATE_ACCOUNT_CLEAR_ERRORS:
      return {
        ...state,
        errorMsg: undefined,
      };

    case userConstants.LOG_OUT:
      return {
        ...state,
        ...initState,
      };

    case userConstants.DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        ...initState,
      };

    case userConstants.DELETE_ACCOUNT_FAIL:
      return {
        ...state,
        errorMsg: payload,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default userReducer;
