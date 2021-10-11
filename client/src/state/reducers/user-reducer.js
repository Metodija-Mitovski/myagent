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
    ////////////////////////////////////////////////////////////
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
    ////////////////////////////////////////////////////////////////

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

    default:
      return state;
  }
};

export default userReducer;
