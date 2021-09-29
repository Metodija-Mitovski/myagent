import { useState, useEffect, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMyPosts } from "../../state/action-creators/user-actions";

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
  const { posts, isFetchingPosts, errorMsg } = useSelector(
    (state) => state.user
  );

  const openModal = (id) => {
    setModal(true);
    setModalElement(id);
  };

  // optimaze call only on inital render
  const getPosts = useMemo(() => {
    return dispatch(getMyPosts());
  }, [dispatch]);

  useEffect(() => {
    if (posts.length > 0) {
      slider.current.style.transform = `translateX(${slidePosition * 50}%)`;
    }
  }, [slider, slidePosition, dispatch, posts.length]);

  return (
    <MyPostsWrapper>
      {isFetchingPosts && <LoaderBig />}
      {posts.length > 0 && (
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
              {posts.map((post) => {
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
              if (Math.abs(slidePosition) >= posts.length - 1) {
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

      {posts.length === 0 && !errorMsg && !isFetchingPosts && (
        <h2>Нема активни постови</h2>
      )}
      {errorMsg && <h2>{errorMsg}</h2>}
    </MyPostsWrapper>
  );
};

export default MyPosts;
