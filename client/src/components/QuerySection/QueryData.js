import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getPostsRequest } from "../../state/action-creators/post-actions";

import {
  Wrapper,
  QueryForm,
  Select,
  Option,
  SearchBtn,
} from "./QueryDataElements";

import SelectCities from "./SelectCities";

const QueryData = ({ search, url, setUrl, query, setQuery }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchUrl = url + new URLSearchParams(query);

    dispatch(getPostsRequest(searchUrl));
  };

  return (
    <Wrapper search={search}>
      <QueryForm onSubmit={handleSubmit}>
        {/* query option */}
        <SelectCities post={false} query={query} setQuery={setQuery} />
        {/* query option */}
        <Select
          name="propery-status"
          id="property-status"
          onChange={(e) => {
            setQuery({ ...query, purpose: e.target.value });
          }}
        >
          <Option value="">намена на недвижност:</Option>
          <Option value="sale">продажба</Option>
          <Option value="rent">изнајмување</Option>
        </Select>
        {/* query option */}
        <Select
          name="property-type"
          id="pproperty-type"
          onChange={(e) => {
            setQuery({ ...query, realEstateType: e.target.value });
          }}
        >
          <Option value="">тип на недвижност:</Option>
          <Option value="apartment">стан</Option>
          <Option value="house">куќа</Option>
          <Option value="studio">гарсоњера</Option>
        </Select>
        <SearchBtn type="submit">Барај</SearchBtn>
      </QueryForm>
    </Wrapper>
  );
};

QueryData.propTypes = {
  search: PropTypes.bool,
  url: PropTypes.string.isRequired,
  setUrl: PropTypes.func.isRequired,
  query: PropTypes.object.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default QueryData;
