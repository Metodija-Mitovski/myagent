import PropTypes from "prop-types";
import { Select, Option } from "./QueryUtilElements";

const SelectCities = (props) => {
  const { setPostData } = props;

  return (
    <Select
      post={props.post ? true : false}
      id="city"
      onChange={(e) => {
        if (props.post === true) {
          setPostData((prevState) => {
            return {
              ...prevState,
              location: { ...prevState.location, city: e.target.value },
            };
          });
        }
      }}
    >
      <Option value="">град:</Option>
      {props.post === false && <Option>Цела Македонија</Option>}
      <Option>Скопје</Option>
      <Option>Охрид</Option>
      <Option>Струга</Option>
      <Option>Дојран</Option>
      <Option>Куманово</Option>
      <Option>Битола</Option>
      <Option>Штип</Option>
      <Option>Велес</Option>
      <Option>Демир Капија</Option>
      <Option>Кавадарци</Option>
      <Option>Неготино</Option>
      <Option>Свети Николе</Option>
      <Option>Берово</Option>
      <Option>Виница</Option>
      <Option>Делчево</Option>
      <Option>Кочани</Option>
      <Option>Македонска Каменица</Option>
      <Option>Пехчево</Option>
      <Option>Пробиштип</Option>
      <Option>Дебар</Option>
      <Option>Кичево</Option>
      <Option>Македонски Брод</Option>
      <Option>Богданци</Option>
      <Option>Валандово</Option>
      <Option>Гевгелија</Option>
      <Option>Радовиш</Option>
      <Option>Струмица</Option>
      <Option>Демир Хисар</Option>
      <Option>Крушево</Option>
      <Option>Прилеп</Option>
      <Option>Ресен</Option>
      <Option>Гостивар</Option>
      <Option>Тетово</Option>
      <Option>Крива Паланка</Option>
      <Option>Кратово</Option>
    </Select>
  );
};

SelectCities.propTypes = {
  post: PropTypes.bool,
  setpostData: PropTypes.func,
};

export default SelectCities;
