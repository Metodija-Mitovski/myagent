import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { animateScroll as scroll } from "react-scroll";

//components
import {
  MainLeftContent,
  ImagesWrapper,
  ImagesSlider,
  SlideBtnWrapper,
  SlideBtn,
  InfoData,
} from "./MainLeftElements";
import Modal from "./Modal";
import TableData from "./TableData";

//icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

//  img
import noImage from "../../../static/images/no-image.png";

const MainLeft = ({ showModal, setShowModal }) => {
  const { postData } = useSelector((state) => state.singlePost);
  const [slidePosition, setSlidePosition] = useState(0);

  const slider = useRef();

  function slideLeft(imagesArr) {
    slidePosition === 0
      ? setSlidePosition(-(imagesArr.length - 1))
      : setSlidePosition(slidePosition + 1);
  }

  function slideRight(imagesArr) {
    Math.abs(slidePosition) >= imagesArr.length - 1
      ? setSlidePosition(0)
      : setSlidePosition(slidePosition - 1);
  }

  useEffect(() => {
    if (postData.images.length > 0) {
      slider.current.style.transform = `translateX(${slidePosition * 100}%)`;
    }
  }, [slidePosition, postData.images.length]);

  return (
    <MainLeftContent id="mainContent">
      {/* modal */}
      {showModal && (
        <Modal
          images={postData.images}
          slidePosition={slidePosition}
          setShowModal={setShowModal}
          slideLeft={slideLeft}
          slideRight={slideRight}
        />
      )}
      {/* images */}
      <ImagesWrapper>
        {postData.images.length > 0 ? (
          <>
            {" "}
            <ImagesSlider ref={slider}>
              {postData.images.length > 0 &&
                postData.images.map((img) => {
                  return (
                    <img
                      key={img._id}
                      src={img.imgUrl}
                      alt=""
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        scroll.scrollTo(300);
                        setShowModal(true);
                      }}
                    />
                  );
                })}
            </ImagesSlider>
            <SlideBtnWrapper>
              <SlideBtn onClick={() => slideLeft(postData.images)}>
                <MdKeyboardArrowLeft className="slide-icon" />
              </SlideBtn>
              <SlideBtn onClick={() => slideRight(postData.images)}>
                <MdKeyboardArrowRight className="slide-icon" />
              </SlideBtn>
            </SlideBtnWrapper>
          </>
        ) : (
          <img src={noImage} alt="" />
        )}
      </ImagesWrapper>
      {/* ---------- */}
      {/* details */}
      <InfoData>
        <h3>Детали</h3>
        <TableData />
        <h3 style={{ marginBottom: "1rem" }}>Опис</h3>
        <p>{postData.desc}</p>
      </InfoData>
    </MainLeftContent>
  );
};

MainLeft.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
export default MainLeft;
