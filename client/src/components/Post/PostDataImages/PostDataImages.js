import { useState, useRef } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";

import {
  ImagesSection,
  UploadWrapper,
  ImagesMain,
  UploadIcon,
  ImgWrapper,
  RemFromUpload,
  ButtonWrapper,
} from "./PostImagesElements";

import { AddButton } from "../PostDataSpecs/PostLeftElements";

const PostDataImages = () => {
  const [fileImg, setFileImg] = useState([]);
  const Section = useRef();
  let uploadId = 0;

  const handleRemove = (e) => {
    const removeId = parseInt(e.target.dataset.id);
    const filterImages = fileImg.filter((img) => {
      return img.uploadId !== removeId;
    });

    setFileImg(filterImages);
  };

  return (
    <ImagesSection ref={Section}>
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
              console.log(Section);
              // scroll.scrollToBottom();
              scroll.scrollTo(Section.current.scrollHeight);
            }}
          />
        </label>
      </UploadWrapper>
      <ImagesMain>
        {fileImg.length > 0 &&
          fileImg.map((img) => {
            img.uploadId = uploadId;
            uploadId++;
            return (
              <ImgWrapper onClick={handleRemove}>
                <img src={URL.createObjectURL(img)} alt="image" />
                <RemFromUpload data-id={uploadId - 1}>X</RemFromUpload>
              </ImgWrapper>
            );
          })}
      </ImagesMain>
      <ButtonWrapper>
        {fileImg.length > 0 && <AddButton>Додади</AddButton>}
      </ButtonWrapper>
    </ImagesSection>
  );
};

export default PostDataImages;
