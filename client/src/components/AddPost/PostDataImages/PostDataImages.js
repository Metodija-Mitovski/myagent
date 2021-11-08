import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import api from "../../../api/api";
import { getSinglePostRequest } from "../../../state/action-creators/post-actions";

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

const PostDataImages = ({ editing }) => {
  const newPostId = useSelector((state) => state.postsReducer.newPost._id);
  const singlePost = useSelector((state) => state.postsReducer.singlePost);
  const dispatch = useDispatch();

  const [fileImg, setFileImg] = useState([]);
  const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png"];
  const MAX_FILE_SIZE = 1024 * 1024 * 6;

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

  const handleDeleteImg = async (publicId) => {
    setIsFetching(true);
    try {
      const res = await axios.patch(
        `${api.rootPost}/delete-img/${singlePost._id}?pub_id=${publicId}`,
        {},
        { withCredentials: true }
      );

      if (res.status === 204) {
        dispatch(getSinglePostRequest(singlePost._id));
        setIsFetching(false);
        return;
      }
    } catch (error) {
      console.log(error);
      setIsFetching(false);
    }
  };

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
        const formData = new FormData();
        formData.append("file", img);
        formData.append("upload_preset", "uenpu4kp");
        return axios.post(
          "https://api.cloudinary.com/v1_1/mitovcoding/image/upload",
          formData
        );
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
      setFileImg([]);
    } catch (error) {
      setIsFetching(false);

      if (!error.response) {
        setErrorMsg(error.message);
        return;
      }
      setErrorMsg("Серверска грешка, обидете се повторно");
    }
  };

  const validateFormatAndSize = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      setErrorMsg("*Подржан формат за слики: jpg/jpeg/png");
      return false;
    }
    if (file.size > MAX_FILE_SIZE) {
      setErrorMsg("*Мaксимална големина на слика е 6MB");
      return false;
    }

    return true;
  };

  const preUploadFile = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return setErrorMsg("*Подржан формат за слики: jpg/jpeg/png");
    }
    if (file.size > MAX_FILE_SIZE) {
      return setErrorMsg("*Мaксимална големина на слика е 6MB");
    }
    setFileImg([...fileImg, file]);
    setErrorMsg("");
  };

  // save images to db
  useEffect(() => {
    let post_id = editing ? singlePost._id : newPostId;

    const uploadImagesToDb = async () => {
      if (images.length > 0) {
        try {
          const res = await axios.patch(
            `${api.rootPost}/images/${post_id}`,
            { images },
            { withCredentials: true }
          );
          if (res.status === 200 && !editing) {
            setIsFetching(false);
            setImages([]);
            history.push("/profile");
            return;
          } else if (res.status === 200 && editing) {
            setImages([]);
            dispatch(getSinglePostRequest(singlePost._id));
            setIsFetching(false);
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
          console.log(error.response);
        }
      }
    };
    uploadImagesToDb();
  }, [images, history, newPostId]);

  return (
    <>
      {editing ? (
        <ImagesSection>
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
                  preUploadFile(e.target.files[0]);
                }}
              />
            </label>
          </UploadWrapper>

          <ImagesMain>
            {singlePost.images.length > 0 &&
              singlePost.images.map((img) => {
                return (
                  <ImgWrapper key={img._id}>
                    <img src={img.imgUrl} alt="" />
                    <RemFromUpload
                      onClick={() => {
                        handleDeleteImg(img.publicId);
                      }}
                    >
                      X
                    </RemFromUpload>
                  </ImgWrapper>
                );
              })}

            {/* ------ pre upload images ------- */}
            {fileImg.length > 0 &&
              fileImg.map((img, index) => {
                img.uploadId = uploadId;
                uploadId++;
                return (
                  <ImgWrapper key={index}>
                    <img src={URL.createObjectURL(img)} alt="" />
                    <RemFromUpload
                      data-id={uploadId - 1}
                      onClick={handleRemove}
                    >
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
                {isFetching ? (
                  <LoadSpinner />
                ) : fileImg.length > 0 ? (
                  "Зачувај"
                ) : (
                  "Продолжи"
                )}
              </AddButton>
            </ButtonWrapper>
            {errMsg && (
              <p style={{ color: "red", fontSize: "14px" }}>{errMsg}</p>
            )}
          </ButtonErrorHolder>
        </ImagesSection>
      ) : (
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
                    preUploadFile(e.target.files[0]);
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
                    <RemFromUpload
                      data-id={uploadId - 1}
                      onClick={handleRemove}
                    >
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
                {isFetching ? (
                  <LoadSpinner />
                ) : fileImg.length > 0 ? (
                  "Постирај"
                ) : (
                  "Продолжи без слики"
                )}
              </AddButton>
            </ButtonWrapper>
            {errMsg && (
              <p style={{ color: "red", fontSize: "14px" }}>{errMsg}</p>
            )}
          </ButtonErrorHolder>
        </ImagesSection>
      )}
    </>
  );
};

export default PostDataImages;
