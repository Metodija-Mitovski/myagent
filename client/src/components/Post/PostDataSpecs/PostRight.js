import PropTypes from "prop-types";

import { MainRight, DataRightMap, DataRightBottom } from "./PostRightElements";
import { Wrapper, ErrMsg } from "./PostLeftElements";
import SelectCities from "../../QuerySection/SelectCities";

const PostRight = (props) => {
  const { postData, setPostData, errMsg } = props;

  return (
    <MainRight>
      <DataRightBottom>
        <Wrapper>
          <label>Одбери град:</label>
          <SelectCities post={true} setPostData={setPostData} />
          {errMsg["location.city"] && <ErrMsg>Град е задолжително поле</ErrMsg>}
        </Wrapper>

        {/* ----- */}
        <Wrapper>
          <label htmlFor="settlement">Населба:</label>
          <input
            type="text"
            id="settlement"
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
        {/* ----- */}
      </DataRightBottom>
      <DataRightMap></DataRightMap>
    </MainRight>
  );
};

PostRight.propTypes = {
  postData: PropTypes.object,
  setPostData: PropTypes.func,
  errMsg: PropTypes.object,
};

export default PostRight;
