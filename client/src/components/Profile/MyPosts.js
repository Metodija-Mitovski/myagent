import { useState, useEffect, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyPostsRequest } from "../../state/action-creators/post-actions";

//components
import {
  MyPostsWrapper,
  SlideLeft,
  SlideRight,
  Slider,
  SlideBtn,
  SlideCenter,
} from "./MyPostElements";
import MyPost from "./MyPost";
import LoaderBig from "../Loader/LoaderBig";

//icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const MyPosts = () => {
  const slider = useRef();
  const [slidePosition, setSlidePosition] = useState(0);
  const [modal, setModal] = useState(false);
  const [modalElement, setModalElement] = useState("");
  const dispatch = useDispatch();

  const { myPosts, isFetching, errorMsg } = useSelector(
    (state) => state.postsReducer
  );

  const openModal = (id) => {
    setModal(true);
    setModalElement(id);
  };

  const getPosts = useMemo(() => {
    return dispatch(getMyPostsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (myPosts.length > 0) {
      slider.current.style.transform = `translateX(${slidePosition * 50}%)`;
    }
  }, [slider, slidePosition, dispatch, myPosts.length]);

  return (
    <MyPostsWrapper>
      {isFetching && <LoaderBig />}
      {myPosts.length > 0 && (
        <>
          <SlideLeft
            onClick={() => {
              if (slidePosition === 0) return;
              setSlidePosition(slidePosition + 1);
            }}
          >
            <SlideBtn>
              <MdKeyboardArrowLeft className="icon-left" />
            </SlideBtn>
          </SlideLeft>
          <SlideCenter>
            <Slider ref={slider}>
              {myPosts.map((post) => {
                return (
                  <MyPost
                    id={post._id}
                    key={post._id}
                    image={post.images.length > 0 ? post.images[0] : false}
                    title={post.title}
                    price={post.price ? post.price : false}
                    modal={modal}
                    modalElementId={modalElement}
                    openModal={openModal}
                    setModal={setModal}
                  />
                );
              })}
            </Slider>
          </SlideCenter>
          <SlideRight
            onClick={() => {
              if (Math.abs(slidePosition) >= myPosts.length - 1) {
                setSlidePosition(0);
                return;
              }
              setSlidePosition(slidePosition - 1);
            }}
          >
            <SlideBtn>
              <MdKeyboardArrowRight className="icon-right" />
            </SlideBtn>
          </SlideRight>
        </>
      )}

      {myPosts.length === 0 && !errorMsg && !isFetching && (
        <h2>Нема активни постови</h2>
      )}
      {errorMsg && <h2>{errorMsg}</h2>}
    </MyPostsWrapper>
  );
};

export default MyPosts;
