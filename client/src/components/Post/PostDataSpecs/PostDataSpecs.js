import styled from "styled-components";
import PostLeft from "./PostLeft";
import PostRight from "./PostRight";

const PostForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostDataSpecs = () => {
  return (
    <PostForm>
      <PostLeft />
      <PostRight />
    </PostForm>
  );
};

export default PostDataSpecs;
