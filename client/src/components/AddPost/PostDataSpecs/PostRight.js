import PropTypes from "prop-types";
import { useSelector } from "react-redux";

/// components
import {
  MainRight,
  DataRightMap,
  DataRightBottom,
  MapInstructionsHolder,
  MapHolder,
} from "./PostRightElements";
import { Wrapper, ErrMsg } from "./PostLeftElements";
import SelectCities from "../../QuerySection/SelectCities";
import Map from "./Map";

const PostRight = (props) => {
  const { postData, setPostData, editing } = props;
  const { errorMsg } = useSelector((state) => state.postsReducer);

  return (
    <MainRight>
      <DataRightBottom>
        <Wrapper>
          <label>Одбери град:</label>
          <SelectCities
            post={true}
            setPostData={setPostData}
            setZoomCityLocation={props.setZoomCityLocation}
          />
          {errorMsg !== undefined && errorMsg["location.city"] && (
            <ErrMsg>Град е задолжително поле</ErrMsg>
          )}
        </Wrapper>

        {/* ----- */}
        <Wrapper>
          <label htmlFor="settlement">Населба:</label>
          <input
            type="text"
            id="settlement"
            value={postData.location.settlement}
            onChange={(e) => {
              setPostData({
                ...postData,
                location: { ...postData.location, settlement: e.target.value },
              });
            }}
          />
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="street">Улица:</label>
          <input
            type="text"
            id="street"
            value={postData.location.street}
            onChange={(e) => {
              setPostData({
                ...postData,
                location: { ...postData.location, street: e.target.value },
              });
            }}
          />
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="street-number">Број:</label>
          <input
            type="text"
            id="street-number"
            value={postData.location.streetNumber}
            onChange={(e) => {
              setPostData({
                ...postData,
                location: {
                  ...postData.location,
                  streetNumber: e.target.value,
                },
              });
            }}
          />
        </Wrapper>
        {/* --map-- */}
      </DataRightBottom>
      <DataRightMap id="map">
        <MapHolder>
          <Map
            zoomCityLocation={props.zoomCityLocation}
            fromAddPost={true}
            postData={postData}
            setPostData={setPostData}
            editing={editing}
          />
        </MapHolder>

        <MapInstructionsHolder>
          <p>
            *Со клик на мапата на локацијата, може да ја додадете точната
            локација на недвижноста - незадолжително
          </p>
        </MapInstructionsHolder>
      </DataRightMap>
    </MainRight>
  );
};

PostRight.propTypes = {
  postData: PropTypes.object,
  setPostData: PropTypes.func,
  zoomCityLocation: PropTypes.object,
  setZoomCityLocation: PropTypes.func,
};

export default PostRight;
