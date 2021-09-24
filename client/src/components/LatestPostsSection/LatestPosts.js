import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import SinglePost from "./SinglePost";
import {
  LatestPostSection,
  PostsContainerWrapper,
  LeftRightSlide,
  PostsCenter,
  Slider,
  SlideLeft,
  SlideRight,
} from "./LatestPostElements";
import { Title } from "../Globals/Globals";

import { getLatestPosts } from "../../state/action-creators/post-actions";

const LatestPosts = () => {
  const slider = useRef();
  const [slidePosition, setSlidePosition] = useState(0);
  const [maxSlidePosition, setMaxSlidePosition] = useState(0);
  const dispatch = useDispatch();
  const latestPosts = useSelector((state) => state.latestPosts);

  function splitPostsIntoChunksOfLen(arr, len) {
    let chunks = [],
      i = 0,
      n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  }

  useEffect(() => {
    dispatch(getLatestPosts());
  }, [dispatch]);

  useEffect(() => {
    if (latestPosts.data.length > 0) {
      const maxPositionArr = splitPostsIntoChunksOfLen(latestPosts.data, 3);
      setMaxSlidePosition(maxPositionArr.length - 1);
      slider.current.style.transform = `translateX(${slidePosition * 100}%)`;
    }
  }, [slidePosition, maxSlidePosition, latestPosts.data]);

  return (
    <>
      <LatestPostSection id="latestPosts">
        <Title>Најново на пазарот</Title>
        <PostsContainerWrapper>
          {/* --- */}
          <LeftRightSlide>
            <SlideLeft
              onClick={() => {
                if (slidePosition === 0) {
                  return;
                } else {
                  setSlidePosition(slidePosition + 1);
                }
              }}
            />
          </LeftRightSlide>
          {/* ------ */}
          <PostsCenter>
            <Slider ref={slider}>
              {/*--- single post--- */}
              {latestPosts.data.length > 0 ? (
                latestPosts.data.map((post) => {
                  return <SinglePost key={post._id} data={post} />;
                })
              ) : (
                <h1 style={{ color: "#ff5a3c" }}>{latestPosts.errorMsg}</h1>
              )}

              {/* ----------------- */}
            </Slider>
          </PostsCenter>
          {/* --- */}
          <LeftRightSlide>
            <SlideRight
              onClick={() => {
                Math.abs(slidePosition) >= maxSlidePosition
                  ? setSlidePosition(0)
                  : setSlidePosition(slidePosition - 1);
              }}
            />
          </LeftRightSlide>
          {/* -------- */}
        </PostsContainerWrapper>
      </LatestPostSection>
    </>
  );
};

export default LatestPosts;
