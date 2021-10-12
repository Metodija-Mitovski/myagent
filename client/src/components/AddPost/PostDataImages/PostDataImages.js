import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import api from "../../../api/api";

import {
  ImagesSection,
  UploadWrapper,
  ImagesMain,
  UploadIcon,
  ImgWrapper,
  RemFromUpload,
  ButtonWrapper,
  ButtonErrorHolder,
} from "./PostImagesElements";

import { AddButton } from "../PostDataSpecs/PostLeftElements";
import LoadSpinner from "../../Loader/Loader";

const PostDataImages = () => {
  const newPostId = useSelector((state) => state.postsReducer.newPost._id);

  const [fileImg, setFileImg] = useState([]);
  let uploadId = 0;
  const [isFetching, setIsFetching] = useState(false);
  const [images, setImages] = useState([]);
  const [errMsg, setErrorMsg] = useState("");
  const history = useHistory();

  const handleRemove = (e) => {
    const removeId = parseInt(e.target.dataset.id);
    const filterImages = fileImg.filter((img) => {
      return img.uploadId !== removeId;
    });

    setFileImg(filterImages);
  };

  const buttonInfo = fileImg.length > 0 ? "Постирај" : "Продолжи без слики";

  const handleClick = async () => {
    setIsFetching(true);
    setErrorMsg("");

    // continue with no images
    if (fileImg.length === 0) {
      history.push("/profile");
      return;
    }

    // upload image to cloud

    try {
      const uploaders = fileImg.map((img) => {
        if (
          img.type === "image/jpeg" ||
          img.type === "image/jpg" ||
          img.type === "image/png"
        ) {
          const formData = new FormData();
          formData.append("file", img);
          formData.append("upload_preset", "uenpu4kp");
          return axios.post(
            "https://api.cloudinary.com/v1_1/mitovcoding/image/upload",
            formData
          );
        } else {
          throw new Error("*Подржан формат за слики: jpg/jpeg/png");
        }
      });

      const res = await axios.all(uploaders);

      const images = res.map((image) => {
        return {
          imgUrl: image.data.secure_url,
          publicId: image.data.public_id,
        };
      });

      setImages(images);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);

      if (!error.response) {
        setErrorMsg(error.message);
        return;
      }
      setErrorMsg("Серверска грешка, обидете се повторно");
    }
  };

  // save images to db
  useEffect(() => {
    const uploadImagesToDb = async () => {
      if (images.length > 0) {
        try {
          const res = await axios.patch(
            `${api.rootPost}/images/${newPostId}`,
            { images },
            { withCredentials: true }
          );
          if (res.status === 200) {
            setIsFetching(false);
            history.push("/profile");
            return;
          }
          setIsFetching(false);
          throw new Error("Грешка обидете се повторно");
        } catch (error) {
          if (error.response.status === 401) {
            history.push("/login");
            return;
          }
          setIsFetching(false);
          setErrorMsg(error.message);
        }
      }
    };
    uploadImagesToDb();
  }, [images, history, newPostId]);

  return (
    <ImagesSection>
      {newPostId ? (
        <UploadWrapper>
          <label htmlFor="file" className="shareOption">
            <UploadIcon />
            <span className="shareoptionText">Додади слика</span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => {
                setFileImg([...fileImg, e.target.files[0]]);
              }}
            />
          </label>
        </UploadWrapper>
      ) : (
        <h4 style={{ marginLeft: "2rem", color: "#ff5a3c" }}>
          Додадете спецификации пред да додадете слики
        </h4>
      )}

      <ImagesMain>
        {fileImg.length > 0 &&
          fileImg.map((img, index) => {
            img.uploadId = uploadId;
            uploadId++;
            return (
              <ImgWrapper key={index}>
                <img src={URL.createObjectURL(img)} alt="" />
                <RemFromUpload data-id={uploadId - 1} onClick={handleRemove}>
                  X
                </RemFromUpload>
              </ImgWrapper>
            );
          })}
      </ImagesMain>
      <ButtonErrorHolder>
        <ButtonWrapper>
          <AddButton
            className={isFetching ? "disable" : ""}
            images={true}
            onClick={handleClick}
          >
            {isFetching ? <LoadSpinner /> : buttonInfo}
          </AddButton>
        </ButtonWrapper>
        {errMsg && <p style={{ color: "red", fontSize: "14px" }}>{errMsg}</p>}
      </ButtonErrorHolder>
    </ImagesSection>
  );
};

export default PostDataImages;
