import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import PostDataSpecs from "./PostDataSpecs/PostDataSpecs";
import PostNav from "./PostDataNav/PostNav";
import PostDataImages from "./PostDataImages/PostDataImages";
import { clearAddPost } from "../../state/action-creators/post-actions";

const PostSection = styled.section`
  width: 100%;
  background: #fff;
  padding: 4rem 0 12rem 0;
`;

const PostData = () => {
  const [postSpecs, setPostSpecs] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearAddPost());
    };
  }, [dispatch]);

  return (
    <>
      <PostSection>
        <PostNav setPostSpecs={setPostSpecs} postSpecs={postSpecs} />
        {postSpecs ? (
          <PostDataSpecs setPostSpecs={setPostSpecs} />
        ) : (
          <PostDataImages />
        )}
      </PostSection>
    </>
  );
};

export default PostData;
