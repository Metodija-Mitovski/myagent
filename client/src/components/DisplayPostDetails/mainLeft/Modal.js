import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

/// components
import {
  Modal as ModalView,
  ModalTop,
  ModalImagesWrapper,
  ModalArrLeft,
  ModalArrRight,
  ModalMiddleWrapper,
  ImagesSlider,
  ModalSlideBtn,
} from "./MainLeftElements";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Modal = ({
  images,
  slidePosition,
  setShowModal,
  slideLeft,
  slideRight,
}) => {
  const modalSlider = useRef();

  useEffect(() => {
    modalSlider.current.style.transform = `translateX(${slidePosition * 100}%)`;
  }, [slidePosition]);
  return (
    <ModalView>
      <ModalTop>
        <span>
          {Math.abs(slidePosition) + 1}/{images.length}
        </span>
        <button onClick={() => setShowModal(false)}>X</button>
      </ModalTop>
      <ModalMiddleWrapper>
        <ModalArrLeft>
          <ModalSlideBtn
            onClick={() => {
              slideLeft(images);
            }}
          >
            <MdKeyboardArrowLeft className="slideModalLeft" />
          </ModalSlideBtn>
        </ModalArrLeft>
        <ModalImagesWrapper>
          <ImagesSlider ref={modalSlider} modal={true}>
            {images.map((img) => {
              return <img src={img.imgUrl} alt="" key={img._id} />;
            })}
          </ImagesSlider>
        </ModalImagesWrapper>
        <ModalArrRight>
          <ModalSlideBtn onClick={() => slideRight(images)}>
            <MdKeyboardArrowRight className="slideModalRight" />
          </ModalSlideBtn>
        </ModalArrRight>
      </ModalMiddleWrapper>
    </ModalView>
  );
};

Modal.propTypes = {
  images: PropTypes.array.isRequired,
  slidePosition: PropTypes.number.isRequired,
  setShowModal: PropTypes.func.isRequired,
  slideLeft: PropTypes.func.isRequired,
  slideRight: PropTypes.func.isRequired,
};

export default Modal;
