import { useRef } from "react";
import { NavWrapper, Specs, Images, UnderWrapper } from "./PostNavElements";

const PostNav = ({ setPostSpecs, postSpecs }) => {
  const dataUnderline = useRef();
  const imagesUnderline = useRef();

  return (
    <NavWrapper>
      <Specs
        onClick={() => {
          dataUnderline.current.style.display = "flex";
          imagesUnderline.current.style.display = "none";
          setPostSpecs(true);
        }}
      >
        1. Детали
        <UnderWrapper ref={dataUnderline}>
          <div className="underLeft"></div>
          <div className="underMiddle"></div>
          <div className="underRight"></div>
        </UnderWrapper>
      </Specs>

      <Images
        onClick={() => {
          dataUnderline.current.style.display = "none";
          imagesUnderline.current.style.display = "flex";
          setPostSpecs(false);
        }}
      >
        2. Слики
        <UnderWrapper style={{ display: "none" }} ref={imagesUnderline}>
          <div className="underLeft"></div>
          <div className="underMiddle"></div>
          <div className="underRight"></div>
        </UnderWrapper>
      </Images>
    </NavWrapper>
  );
};

export default PostNav;
