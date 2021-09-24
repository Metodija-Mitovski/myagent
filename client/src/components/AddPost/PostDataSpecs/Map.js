import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";
import { MarkerPin } from "./PostRightElements";

const Map = ({
  zoomCityLocation,
  postData,
  setPostData,
  fromAddPost,
  lat,
  lng,
}) => {
  return (
    <>
      {fromAddPost ? (
        <GoogleMapReact
          bootstrapURLKeys={{
            //   set env
            key: "AIzaSyD1w_hV2WYeFMy0lHZVZm9d_8fpyCR8nRE",
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
              location: {
                ...postData.location,
                mapLocation: { lat: lat, lng: lng },
              },
            });
          }}
        >
          {postData.location.mapLocation && (
            <MarkerPin
              lat={postData.location.mapLocation.lat}
              lng={postData.location.mapLocation.lng}
            />
          )}
        </GoogleMapReact>
      ) : (
        <GoogleMapReact
          bootstrapURLKeys={{
            //   set env
            key: "AIzaSyD1w_hV2WYeFMy0lHZVZm9d_8fpyCR8nRE",
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
