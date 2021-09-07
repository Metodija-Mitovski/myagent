import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  ImgWrapper,
  ImgOptionForm,
  ImgOptIcon,
  ImgOptList,
  LoaderWrapper,
  ErrorHolder,
} from "./ProfileImgElemets";
import { updateUser } from "../../state/action-creators/user-actions";
import LoadSpinner from "../Loader/Loader";

import noAvatar from "../../static/images/noAvatar.png";

const ProfileImg = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // upload img (cloud to server)
  const handleImgUpload = async (e) => {
    setErrorMsg("");
    setIsFetching(true);
    const fileImg = e.target.files[0];
    try {
      // upload img to cloud
      if (
        fileImg.type === "image/jpeg" ||
        fileImg.type === "image/jpg" ||
        fileImg.type === "image/png"
      ) {
        const formData = new FormData();
        formData.append("file", fileImg);
        formData.append("upload_preset", "uenpu4kp");
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/mitovcoding/image/upload",
          formData
        );
        // save image url to db
        if (res.status === 200) {
          const imgUrl = res.data.secure_url;
          const userRes = await axios.patch(
            "http://localhost:5000/user/update",
            {
              profileImg: {
                url: imgUrl,
                id: res.data.public_id,
              },
            },
            { withCredentials: true }
          );
          if (userRes.status === 200) {
            // update user store
            setIsFetching(false);

            dispatch(
              updateUser({
                profileImg: { url: imgUrl, id: userRes.data.profileImg.id },
              })
            );
            return;
          }
        }
        //
        setIsFetching(false);
        throw new Error("Се случи грешка, обидете се повторно");
      } else {
        setIsFetching(false);
        throw new Error("Невалиден формат");
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  /// delete img
  const deleteProfileImg = async () => {
    setErrorMsg("");
    setIsFetching(true);
    try {
      const res = await axios.delete(
        `http://localhost:5000/user/profile-img/${user.profileImg.id}`,
        { withCredentials: true }
      );
      if (res.status === 200) {
        dispatch(
          updateUser({
            profileImg: { url: "", id: "" },
          })
        );
        setIsFetching(false);
        return;
      }

      throw new Error("Грешка, обидете се повторно");
    } catch (error) {
      setErrorMsg(error.message);
      setIsFetching(false);
    }
  };

  return (
    <>
      <ImgWrapper>
        <img
          src={user.profileImg.url ? user.profileImg.url : noAvatar}
          alt=""
        />
      </ImgWrapper>
      <ImgOptionForm
        onChange={(e) => {
          handleImgUpload(e);
        }}
      >
        <ImgOptIcon
          onClick={(e) => {
            setIsOptionOpen(!isOptionOpen);
          }}
        />
        <ImgOptList className={isOptionOpen ? "showList" : ""}>
          {user.profileImg.url ? (
            <>
              <li>
                <label htmlFor="img"> Промени</label>
                <input type="file" id="img" accept=".png,.jpeg,.jpg" />
              </li>
              <li onClick={deleteProfileImg}>Избриши</li>
            </>
          ) : (
            <>
              <li>
                <label htmlFor="img"> Додади </label>
                <input type="file" id="img" accept=".png,.jpeg,.jpg" />
              </li>
            </>
          )}
        </ImgOptList>
        {isFetching && (
          <LoaderWrapper>
            <LoadSpinner />
          </LoaderWrapper>
        )}
      </ImgOptionForm>
      <ErrorHolder>{errorMsg && { errorMsg }}</ErrorHolder>
    </>
  );
};

export default ProfileImg;
