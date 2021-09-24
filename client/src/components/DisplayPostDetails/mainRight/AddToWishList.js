import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

// components
import { ButtonWrapper, Button } from "./MainRightElements";
import Loader from "../../Loader/Loader";

const AddToWishList = () => {
  const { postData } = useSelector((state) => state.singlePost);
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
      const res = await axios.post(
        `http://localhost:5000/posts/wish-list/${postData._id}`,
        {},
        { withCredentials: true }
      );

      if (res.status === 200) {
        setInfoMsg(res.data);
        setIsFetching(false);

        return;
      }

      if (res.status === 202) {
        setInfoMsg(res.data);
        setIsFetching(false);

        return;
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
          `http://localhost:5000/posts/wish-list/${postData._id}`,
          { withCredentials: true }
        );

        if (res.status === 200) {
          setIsInWishList(true);
          setIsFetching(false);
          return;
        }
        if (res.status === 204) {
          setIsFetching(false);
          setIsInWishList(false);
          return;
        }
      } catch (error) {
        setIsFetching(true);
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
