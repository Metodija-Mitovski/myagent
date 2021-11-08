import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addPostRequest,
  editPostRequest,
} from "../../../state/action-creators/post-actions";

//components
import PostLeft from "./PostLeft";
import PostRight from "./PostRight";

const PostForm = styled.form`
  width: 100%;
  display: flex;
`;

const PostDataSpecs = (props) => {
  const [postData, setPostData] = useState({
    title: "",
    shortDesc: "",
    desc: "",
    price: "",
    purpose: "",
    realEstateType: "",
    specs: {
      bedrooms: "",
      baths: "",
      area: "",
      balcony: "",
      parking: "",
    },
    location: {
      city: "",
      settlement: "",
      street: "",
      streetNumber: "",
      mapLocation: {
        lat: "",
        lng: "",
      },
    },
    contactNumber: "",
    images: [],
  });
  const { setPostSpecs, editing } = props;
  const dispatch = useDispatch();
  const { isFetching, newPost, singlePost } = useSelector(
    (state) => state.postsReducer
  );

  const [isFetchSuccess, setIsFetchSuccess] = useState(false);

  const [zoomCityLocation, setZoomCityLocation] = useState({
    lat: "",
    lng: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      const update = await dispatch(editPostRequest(singlePost._id, postData));

      if (update) {
        setIsFetchSuccess(true);
      }
    } else {
      dispatch(addPostRequest(postData));
    }
  };

  useEffect(() => {
    if (newPost._id) {
      setIsFetchSuccess(true);
      setTimeout(() => {
        setPostSpecs(false);
      }, 1000);
    }
  }, [dispatch, newPost._id, setPostSpecs]);

  useEffect(() => {
    if (editing && singlePost !== undefined) {
      setPostData(singlePost);
    }
  }, [singlePost, editing, dispatch]);

  return (
    <PostForm onSubmit={handleSubmit}>
      <PostLeft
        postData={postData}
        setPostData={setPostData}
        isFetching={isFetching}
        isFetchSuccess={isFetchSuccess}
        editing={editing}
      />
      <PostRight
        postData={postData}
        setPostData={setPostData}
        zoomCityLocation={zoomCityLocation}
        setZoomCityLocation={setZoomCityLocation}
        editing={editing}
      />
    </PostForm>
  );
};

PostDataSpecs.propTypes = {
  setPostSpecs: PropTypes.func.isRequired,
};

export default PostDataSpecs;
