import {
  Wrapper,
  QueryForm,
  Select,
  Option,
  SearchBtn,
} from "./QueryUtilElements";

import SelectCities from "./SelectCities";

const QueryUtils = () => {
  return (
    <Wrapper>
      <QueryForm>
        {/* qiery option */}
        <SelectCities />
        {/* qiery option */}
        <Select name="propery-status" id="property-status">
          <Option value="propery-status">статус на недвижност:</Option>
          <Option value="propery-status">продажба</Option>
          <Option value="propery-status">изнајмување</Option>
        </Select>
        {/* qiery option */}
        <Select name="property-type" id="pproperty-type">
          <Option value="property-type">тип на недвижност:</Option>
          <Option value="property-type">стан</Option>
          <Option value="property-type">куќа</Option>
          <Option value="property-type">гарсоњера</Option>
          <Option value="property-type">студио</Option>
        </Select>
        <SearchBtn type="submit">Барај</SearchBtn>
      </QueryForm>
    </Wrapper>
  );
};

export default QueryUtils;
