import { useSelector } from "react-redux";
import Map from "../../AddPost/PostDataSpecs/Map";

// components

const MapLocation = () => {
  const singlePost = useSelector((state) => state.postsReducer.singlePost);

  return (
    <>
      {singlePost.mapLocation ? (
        <Map
          fromAddPost={false}
          lat={singlePost.mapLocation.lat}
          lng={singlePost.mapLocation.lng}
        />
      ) : (
        <h1>Локацијата не е достапна...</h1>
      )}
    </>
  );
};

export default MapLocation;
