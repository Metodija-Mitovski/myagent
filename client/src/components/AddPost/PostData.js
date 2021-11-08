import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PostDataSpecs from "./PostDataSpecs/PostDataSpecs";
import PostNav from "./PostDataNav/PostNav";
import PostDataImages from "./PostDataImages/PostDataImages";
import { clearAddPost } from "../../state/action-creators/post-actions";
import { getSinglePostRequest } from "../../state/action-creators/post-actions";
import { withRouter } from "react-router";

const PostSection = styled.section`
  width: 100%;
  background: #fff;
  padding: 4rem 0 12rem 0;
`;

const PostData = (props) => {
  const [postSpecs, setPostSpecs] = useState(true);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const { singlePost, errorMsg } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    const check_edit = props.match.path.split("/");

    if (check_edit[2] === "edit") {
      dispatch(getSinglePostRequest(props.match.params.id));
      setEditing(true);
    }

    return () => {
      dispatch(clearAddPost());
    };
  }, [dispatch, props.match.path, props.match.params.id]);

  return (
    <>
      <PostSection>
        {editing && errorMsg && !singlePost ? (
          <h1>{errorMsg}</h1>
        ) : (
          <>
            {" "}
            <PostNav setPostSpecs={setPostSpecs} postSpecs={postSpecs} />
            {postSpecs ? (
              <PostDataSpecs setPostSpecs={setPostSpecs} editing={editing} />
            ) : (
              <PostDataImages editing={editing} />
            )}
          </>
        )}
      </PostSection>
    </>
  );
};

export default withRouter(PostData);
