import axios from "axios";
import postConstants from "../constants/postsConstants";
import api from "../../api/api";

export const postsActionStart = () => {
  return {
    type: postConstants.POSTS_ACTION_START,
  };
};

//////////// latest posts

export const getLatestPostsSuccess = (latestPosts) => {
  return {
    type: postConstants.GET_LATEST_POSTS_SUCCESS,
    payload: latestPosts,
  };
};

export const getLatestPostsFail = (error) => {
  return {
    type: postConstants.GET_LATEST_POSTS_FAILURE,
    payload: error,
  };
};

export const getLatestPostsRequest = () => {
  return async (dispatch) => {
    dispatch(postsActionStart());

    try {
      const res = await axios.get(`${api.rootPost}/latest`);

      if (res.status === 200) {
        dispatch(getLatestPostsSuccess(res.data));
      } else {
        throw new Error();
      }
    } catch (error) {
      if (!error.response) {
        dispatch(getLatestPostsFail(error.message));
        return;
      }

      dispatch(getLatestPostsFail(error.response.data));
    }
  };
};

////////// posts
export const getPostsSuccess = (posts) => {
  return { type: postConstants.GET_POSTS_SUCCESS, payload: posts };
};

export const getPostsFail = (error) => {
  return {
    type: postConstants.GET_POSTS_FAIL,
    payload: error,
  };
};

export const getPostsRequest = (url) => {
  return async (dispatch) => {
    try {
      dispatch(postsActionStart());
      const res = await axios.get(url);
      if (res.status === 200) {
        return dispatch(getPostsSuccess(res.data));
      }
      throw new Error();
    } catch (error) {
      dispatch(getPostsFail(error));
    }
  };
};

///////////// related posts

export const getRelatedPostsSuccess = (posts) => {
  return {
    type: postConstants.GET_RELATED_POSTS_SUCCESS,
    payload: posts,
  };
};

export const getRelatedPostsFail = (error) => {
  return {
    type: postConstants.GET_RELATED_POSTS_FAIL,
    payload: error,
  };
};

export const getRelatedPostsRequest = (post) => {
  return async (dispatch) => {
    dispatch(postsActionStart());

    try {
      const res = await axios.get(
        `${api.rootPost}/related?location=${post.location.city}&realEstateType=${post.realEstateType}&purpose=${post.purpose}&id=${post._id}`
      );

      if (res.status === 200) {
        dispatch(getRelatedPostsSuccess(res.data));
      } else {
        throw new Error();
      }
    } catch (error) {
      error.message = "не се пронајдени поврзани објави";
      dispatch(getRelatedPostsFail(error.message));
    }
  };
};

/////////////// single post

export const getSinglePostSuccess = (post) => {
  return {
    type: postConstants.GET_SINGLE_POST_SUCCESS,
    payload: post,
  };
};

export const getSinglePostFail = (error) => {
  return {
    type: postConstants.GET_SINGLE_POST_FAILURE,
    payload: error,
  };
};

export const getSinglePostRequest = (postId) => {
  return async (dispatch) => {
    dispatch(postsActionStart());

    try {
      const res = await axios.get(`${api.rootPost}/${postId}`);

      if (res.status === 200) {
        dispatch(getSinglePostSuccess(res.data));
        dispatch(getRelatedPostsRequest(res.data));
      } else {
        throw new Error();
      }
    } catch (error) {
      if (!error.response) {
        dispatch(getSinglePostFail(error.message));
        return;
      }

      dispatch(getSinglePostFail(error.response.data));
    }
  };
};

export const clearSinglePost = () => {
  return (dispatch) => {
    dispatch({
      type: postConstants.CLEAR_SINGLE_POST,
    });
  };
};

////////////// my posts

export const getMyPostsSuccess = (myPosts) => {
  return {
    type: postConstants.GET_MY_POSTS_SUCCESS,
    payload: myPosts,
  };
};

export const getMyPostsFail = (error) => {
  return {
    type: postConstants.GET_MY_POSTS_FAILURE,
    payload: error,
  };
};

export const getMyPostsRequest = () => {
  return async (dispatch) => {
    dispatch(postsActionStart());

    try {
      const res = await axios.get(`${api.rootPost}/my-posts`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        dispatch(getMyPostsSuccess(res.data));
        return;
      }

      throw new Error("грешка, обдете се повторно");
    } catch (error) {
      if (!error.response) {
        dispatch(getMyPostsFail(error.message));
        return;
      } else {
        dispatch(getMyPostsFail(error.response.data));
      }
    }
  };
};

//////////// add post

export const addPostSuccess = (post) => {
  return {
    type: postConstants.ADD_POST_SUCCESS,
    payload: post,
  };
};

export const addPostFail = (error) => {
  return {
    type: postConstants.ADD_POST_FAILURE,
    payload: error,
  };
};

export const addPostRequest = (postData) => {
  return async (dispatch) => {
    dispatch(postsActionStart());

    try {
      const res = await axios.post(`${api.rootPost}/newpost`, postData, {
        withCredentials: true,
      });

      if (res.status === 200) {
        dispatch(addPostSuccess(res.data));
      } else {
        throw new Error();
      }
    } catch (error) {
      if (!error.response) {
        dispatch(addPostFail(error.message));
        return;
      }

      dispatch(addPostFail(error.response.data));
    }
  };
};

export const clearAddPost = () => {
  return (dispatch) => {
    dispatch({ type: postConstants.CLEAR_ADD_POST });
  };
};

//// edit post
export const editPostSuccess = () => {
  return {
    type: postConstants.EDIT_POST_SUCCESS,
  };
};

export const editPostFail = (error) => {
  return {
    type: postConstants.EDIT_POST_FAILURE,
    payload: error,
  };
};

export const editPostRequest = (id, data) => {
  return async (dispatch) => {
    dispatch(postsActionStart());

    try {
      const res = await axios.patch(`${api.rootPost}/edit/${id}`, data, {
        withCredentials: true,
      });

      if (res.status === 204) {
        dispatch(editPostSuccess());
        return true;
      }

      throw new Error();
    } catch (error) {
      if (!error.response) {
        dispatch(editPostFail(error.message));
        return;
      }

      dispatch(editPostFail(error.response.data));
    }
  };
};

//////////// delete post specs

export const deletePostSuccess = (id) => {
  return {
    type: postConstants.DELETE_POST_SUCCESS,
    payload: id,
  };
};

export const deletePostFail = (error) => {
  return {
    type: postConstants.DELETE_POST_FAILURE,
    payload: error,
  };
};

export const deletePostRequest = (postId) => {
  return async (dispatch) => {
    dispatch(postsActionStart());

    try {
      const res = await axios.delete(`${api.rootPost}/${postId}`, {
        withCredentials: true,
      });

      if (res.status === 204) {
        dispatch(deletePostSuccess(postId));
        return;
      }
    } catch (error) {
      if (!error.response) {
        dispatch(deletePostFail(error.message));
        return;
      }

      dispatch(deletePostFail(error.response.data));
    }
  };
};

/// delete post images
