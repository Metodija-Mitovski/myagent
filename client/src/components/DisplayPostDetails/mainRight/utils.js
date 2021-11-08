import axios from "axios";
import api from "../../../api/api";
export const updateList = async (postId) => {
  const res = await axios.post(
    `${api.rootPost}/wish-list/${postId}`,
    {},
    { withCredentials: true }
  );

  if (res.status === 201) {
    return true;
  }

  return false;
};

export const deletePostFromList = async (postId) => {
  const res = await axios.delete(`${api.rootPost}/wish-list/${postId}`, {
    withCredentials: true,
  });

  if (res.status === 204) {
    return true;
  }

  return false;
};
