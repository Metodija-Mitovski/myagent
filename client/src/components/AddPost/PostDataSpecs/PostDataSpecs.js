import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import styled from "styled-components";

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

  const [zoomCityLocation, setZoomCityLocation] = useState({
    lat: "",
    lng: "",
  });

  const [isFetching, setIsFetching] = useState(false);
  const [isFetchSuccess, setIsFetchSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState({});
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // clear err
    setErrMsg({});
    setIsFetching(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/posts/newpost",
        postData,
        { withCredentials: true }
      );

      if (res.status === 200) {
        props.setPostId(res.data._id);
        setIsFetchSuccess(true);
        setIsFetching(false);
        setTimeout(() => {
          props.setPostSpecs(false);
          return;
        }, 1000);
      } else {
        throw new Error();
      }
    } catch (error) {
      setIsFetching(false);
      if (!error.response) {
        setErrMsg({ serverErr: "Серверска грешка, обидете се повторно" });
        return;
      }

      if (error.response.status === 401) {
        history.push("/login");
      }
      setErrMsg({ ...error.response.data });
    }
  };

  return (
    <PostForm onSubmit={handleSubmit}>
      <PostLeft
        postData={postData}
        setPostData={setPostData}
        errMsg={errMsg}
        isFetching={isFetching}
        isFetchSuccess={isFetchSuccess}
      />
      <PostRight
        postData={postData}
        setPostData={setPostData}
        errMsg={errMsg}
        zoomCityLocation={zoomCityLocation}
        setZoomCityLocation={setZoomCityLocation}
      />
    </PostForm>
  );
};

PostDataSpecs.propTypes = {
  setPostSpecs: PropTypes.func.isRequired,
  setPostId: PropTypes.func.isRequired,
};

export default PostDataSpecs;
