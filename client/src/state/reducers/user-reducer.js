export const initState = {
  _id: "",
  firstName: "",
  lastName: "",
  profileImg: {
    url: "",
    id: "",
  },
  email: "",
  isLoggedIn: false,
  posts: [],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default userReducer;
