import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import api from "../../../api/api";
// components
import { ButtonWrapper, Button } from "./MainRightElements";
import Loader from "../../Loader/Loader";

import { updateList, deletePostFromList } from "./utils";

const AddToWishList = () => {
  const postData = useSelector((state) => state.postsReducer.singlePost);
  const user = useSelector((state) => state.user);

  const [isFetching, setIsFetching] = useState(false);
  const [infoMsg, setInfoMsg] = useState("");
  const [isInWishList, setIsInWishList] = useState(false);

  const addPostToList = async () => {
    setIsFetching(true);
    setInfoMsg("");

    if (!user.isLoggedIn) {
      setInfoMsg(
        "најавете се на вашиот профил за да додадете во листа на желби"
      );
      setIsFetching(false);
      return;
    }

    try {
      if (isInWishList) {
        const post = await deletePostFromList(postData._id);
        if (post) {
          setInfoMsg("Постот е избришан од листа на желби");
          setIsFetching(false);
          return;
        }
      }

      if (!isInWishList) {
        const post = await updateList(postData._id);
        if (post) {
          setInfoMsg("Постот е додаден во листа на желби");
          setIsFetching(false);
          return;
        }
      }

      throw new Error("грешка обидете се повторно");
    } catch (error) {
      setIsFetching(false);
      if (!error.response) {
        setInfoMsg(error.message);
        return;
      }
      setInfoMsg(error.response.data);
    }
  };

  useEffect(() => {
    const checkExistInWishList = async () => {
      try {
        const res = await axios.get(
          `${api.rootPost}/wish-list/${postData._id}`,
          { withCredentials: true }
        );
        if (res.status === 200) {
          setIsInWishList(true);
          setIsFetching(false);
          return;
        }
      } catch (error) {
        if (error.response.status === 404) {
          setIsInWishList(false);
          setIsFetching(false);
        }
        setIsFetching(false);
      }
    };
    checkExistInWishList();
  }, [postData._id, isFetching]);

  return (
    <ButtonWrapper>
      <Button
        bg="#ff5a3c"
        hoverBg="#e63819"
        onClick={() => {
          addPostToList();
          setTimeout(() => {
            setInfoMsg("");
          }, 3000);
        }}
      >
        {isFetching ? (
          <Loader />
        ) : isInWishList ? (
          "избриши од листа на желби"
        ) : (
          "додади во листа на желби"
        )}
      </Button>
      <p style={{ color: "red", fontSize: "14px", textAlign: "center" }}>
        {infoMsg}
      </p>
    </ButtonWrapper>
  );
};

export default AddToWishList;
