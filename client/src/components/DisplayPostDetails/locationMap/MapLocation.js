import { useSelector } from "react-redux";
import Map from "../../AddPost/PostDataSpecs/Map";

// components

const MapLocation = () => {
  const location = useSelector((state) => state.singlePost.postData.location);

  return (
    <>
      {location.mapLocation ? (
        <Map
          fromAddPost={false}
          lat={location.mapLocation.lat}
          lng={location.mapLocation.lng}
        />
      ) : (
        <h1>Локацијата не е достапна...</h1>
      )}
    </>
  );
};

export default MapLocation;
