import {
  MainRight,
  DataRightTop,
  DataRightMap,
  DataRightBottom,
  FindButton,
} from "./PostRightElements";

import { Wrapper } from "./PostLeftElements";

import SelectCities from "../../QuerySection/SelectCities";

const PostRight = () => {
  return (
    <MainRight>
      <DataRightTop>
        <div className="address">
          <label htmlFor="address">Адреса</label>
          <input type="text" />
        </div>
        <FindButton>Најди Адреса</FindButton>
      </DataRightTop>
      <DataRightMap></DataRightMap>
      <DataRightBottom>
        <Wrapper>
          <label>Одбери град:</label>
          <SelectCities post={true} />
        </Wrapper>

        {/* ----- */}
        <Wrapper>
          <label htmlFor="settlement">Населба:</label>
          <input type="text" id="settlement" />
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="street">Улица:</label>
          <input type="text" id="street" />
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="street-number">Број:</label>
          <input type="text" id="street-number" />
        </Wrapper>
        {/* ----- */}
      </DataRightBottom>
    </MainRight>
  );
};

export default PostRight;
