import { useState } from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import { MarkerPin } from "./PostRightElements";
import { useSelector } from "react-redux";

const Map = ({
  zoomCityLocation,
  postData,
  setPostData,
  fromAddPost,
  lat,
  lng,
  editing,
}) => {
  const singlePost = useSelector((state) => state.postsReducer.singlePost);
  const [updateMap, setUpdateMap] = useState(false);

  return (
    <>
      {fromAddPost ? (
        <GoogleMapReact
          bootstrapURLKeys={{
            //   set env
            key: `${process.env.REACT_APP_GOOGLE_MAP_KEY}`,
          }}
          center={
            zoomCityLocation.lat && zoomCityLocation.lng
              ? { lat: zoomCityLocation.lat, lng: zoomCityLocation.lng }
              : { lat: 41.7, lng: 21.7 }
          }
          zoom={zoomCityLocation.lat && zoomCityLocation.lng ? 12 : 8}
          onClick={({ lat, lng }) => {
            setPostData({
              ...postData,
              mapLocation: {
                ...postData.mapLocation,
                lat: lat,
                lng: lng,
              },
            });

            setUpdateMap(true);
          }}
        >
          {singlePost && singlePost.mapLocation && editing && !updateMap ? (
            <MarkerPin
              lat={singlePost.mapLocation.lat}
              lng={singlePost.mapLocation.lng}
            />
          ) : (
            postData.mapLocation &&
            postData.mapLocation.lat && (
              <MarkerPin
                lat={postData.mapLocation.lat}
                lng={postData.mapLocation.lng}
              />
            )
          )}
        </GoogleMapReact>
      ) : (
        <GoogleMapReact
          bootstrapURLKeys={{
            //   set env
            key: `${process.env.REACT_APP_GOOGLE_MAP_KEY}`,
          }}
          center={{ lat: lat, lng: lng }}
          zoom={15}
        >
          <MarkerPin lat={lat} lng={lng} />
        </GoogleMapReact>
      )}
    </>
  );
};

Map.propTypes = {
  zoomCityLocation: PropTypes.object,
  fromAddPost: PropTypes.bool,
  postData: PropTypes.object,
  setPostData: PropTypes.func,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default Map;
