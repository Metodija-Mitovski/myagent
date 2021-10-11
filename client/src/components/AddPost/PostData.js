import { useState } from "react";
import styled from "styled-components";
import PostDataSpecs from "./PostDataSpecs/PostDataSpecs";
import PostNav from "./PostDataNav/PostNav";
import PostDataImages from "./PostDataImages/PostDataImages";

const PostSection = styled.section`
  width: 100%;
  background: #fff;
  padding: 4rem 0 12rem 0;
`;

const PostData = () => {
  const [postSpecs, setPostSpecs] = useState(true);
  const [postId, setPostId] = useState("");

  return (
    <>
      <PostSection>
        <PostNav setPostSpecs={setPostSpecs} postSpecs={postSpecs} />
        {postSpecs ? (
          <PostDataSpecs setPostSpecs={setPostSpecs} setPostId={setPostId} />
        ) : (
          <PostDataImages postId={postId} />
        )}
      </PostSection>
    </>
  );
};

export default PostData;
