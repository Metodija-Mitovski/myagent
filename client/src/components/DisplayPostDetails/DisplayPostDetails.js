import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//components
import {
  DisplayPostSection,
  ContentWrapper,
  MainWrapper,
  MapWrapper,
} from "./DisplayPostElements";
import MainLeft from "./mainLeft/MainLeft";
import MainRight from "./mainRight/MainRight";
import MapLocation from "./locationMap/MapLocation";
import LoaderBig from "../Loader/LoaderBig";
//
import { getSinglePost } from "../../state/action-creators/post-actions";

const DisplayPostDetails = () => {
  const postId = useParams().id;
  const dispatch = useDispatch();
  const post = useSelector((state) => state.singlePost);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [postId, dispatch]);

  return (
    <DisplayPostSection id="display-post">
      {post.isFetching ? (
        <LoaderBig />
      ) : post.errorMsg ? (
        <h1 style={{ color: "#ff5a3c", marginBottom: "3rem" }}>
          {post.errorMsg}
        </h1>
      ) : (
        <ContentWrapper>
          <MainWrapper>
            <MainLeft showModal={showModal} setShowModal={setShowModal} />
            <MainRight showModal={showModal} />
          </MainWrapper>

          <MapWrapper>
            <MapLocation />
          </MapWrapper>
        </ContentWrapper>
      )}
    </DisplayPostSection>
  );
};

export default DisplayPostDetails;
