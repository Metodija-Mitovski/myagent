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
import {
  getSinglePostRequest,
  clearSinglePost,
} from "../../state/action-creators/post-actions";

const DisplayPostDetails = () => {
  const postId = useParams().id;
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postsReducer.singlePost);
  const { isFetching, errorMsg } = useSelector((state) => state.postsReducer);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getSinglePostRequest(postId));

    return () => {
      clearSinglePost();
    };
  }, []);

  return (
    <DisplayPostSection id="display-post">
      {isFetching ? (
        <LoaderBig />
      ) : errorMsg ? (
        <h1 style={{ color: "#ff5a3c", marginBottom: "3rem" }}>{errorMsg}</h1>
      ) : (
        <ContentWrapper>
          {post && (
            <>
              <MainWrapper>
                <MainLeft showModal={showModal} setShowModal={setShowModal} />

                <MainRight showModal={showModal} />
              </MainWrapper>

              <MapWrapper>
                <MapLocation />
              </MapWrapper>
            </>
          )}
        </ContentWrapper>
      )}
    </DisplayPostSection>
  );
};

export default DisplayPostDetails;
