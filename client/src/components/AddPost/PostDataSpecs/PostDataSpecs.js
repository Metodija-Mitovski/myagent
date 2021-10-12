import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { addPostRequest } from "../../../state/action-creators/post-actions";

//components
import PostLeft from "./PostLeft";
import PostRight from "./PostRight";

const PostForm = styled.form`
  width: 100%;
  display: flex;
`;

const PostDataSpecs = (props) => {
  const [postData, setPostData] = useState({
    specs: {},
    location: {},
    images: [],
  });
  const { setPostSpecs } = props;
  const dispatch = useDispatch();
  const { isFetching, newPost } = useSelector((state) => state.postsReducer);

  const [zoomCityLocation, setZoomCityLocation] = useState({
    lat: "",
    lng: "",
  });

  const [isFetchSuccess, setIsFetchSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addPostRequest(postData));
  };

  useEffect(() => {
    if (newPost._id) {
      setIsFetchSuccess(true);
      setTimeout(() => {
        setPostSpecs(false);
      }, 1000);
    }
  }, [dispatch, newPost._id, setPostSpecs]);

  return (
    <PostForm onSubmit={handleSubmit}>
      <PostLeft
        postData={postData}
        setPostData={setPostData}
        isFetching={isFetching}
        isFetchSuccess={isFetchSuccess}
      />
      <PostRight
        postData={postData}
        setPostData={setPostData}
        zoomCityLocation={zoomCityLocation}
        setZoomCityLocation={setZoomCityLocation}
      />
    </PostForm>
  );
};

PostDataSpecs.propTypes = {
  setPostSpecs: PropTypes.func.isRequired,
};

export default PostDataSpecs;
