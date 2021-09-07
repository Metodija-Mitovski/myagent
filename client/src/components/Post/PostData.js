import { useState } from "react";

import styled from "styled-components";
import PostDataSpecs from "./PostDataSpecs/PostDataSpecs";
import PostNav from "./PostDataNav/PostNav";
import PostDataImages from "./PostDataImages/PostDataImages";

const PostSection = styled.section`
  width: 100%;
  background: #fff;
  padding: 4rem 0 8rem 0;
`;

const PostData = () => {
  const [postSpecs, setPostSpecs] = useState(true);

  return (
    <>
      <PostSection>
        <PostNav setPostSpecs={setPostSpecs} postSpecs={postSpecs} />
        {postSpecs ? <PostDataSpecs /> : <PostDataImages />}
      </PostSection>
    </>
  );
};

export default PostData;
