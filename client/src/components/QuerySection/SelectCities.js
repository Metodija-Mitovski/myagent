import PropTypes from "prop-types";
import { Select, Option } from "./QueryUtilElements";
import {
  updateGeoMapCenterView,
  cyr_to_lat,
} from "../AddPost/PostDataSpecs/utils";

const SelectCities = (props) => {
  const { setPostData } = props;

  return (
    <Select
      post={props.post ? true : false}
      id="city"
      onChange={async (e) => {
        if (props.post === true) {
          setPostData((prevState) => {
            return {
              ...prevState,
              location: {
                ...prevState.location,
                city: e.target.value,
              },
            };
          });

          const city_to_lat = cyr_to_lat(e.target.value);
          const location = await updateGeoMapCenterView(city_to_lat);
          if (location) {
            props.setZoomCityLocation({ lat: location.lat, lng: location.lng });
          } else {
            props.setZoomCityLocation({ lat: "", lng: "" });
          }
        }
      }}
    >
      <Option value="">град:</Option>
      {props.post === false && (
        <Option value="Cela Makedonija">Цела Македонија</Option>
      )}
      <Option value="скопје">Скопје</Option>
      <Option value="охрид">Охрид</Option>
      <Option value="струга">Струга</Option>
      <Option value="дојран">Дојран</Option>
      <Option value="куманово"> Куманово</Option>
      <Option value="битола">Битола</Option>
      <Option value="штип">Штип</Option>
      <Option value="велес">Велес</Option>
      <Option value="демир капија">Демир Капија</Option>
      <Option value="кавадарци">Кавадарци</Option>
      <Option value="неготино">Неготино</Option>
      <Option value="свети николе">Свети Николе</Option>
      <Option value="верово">Берово</Option>
      <Option value="виница"> Виница</Option>
      <Option value="делчево">Делчево</Option>
      <Option value="кочани">Кочани</Option>
      <Option value="македонска каменица">Македонска Каменица</Option>
      <Option value="пехчево">Пехчево</Option>
      <Option value="пробиштип">Пробиштип</Option>
      <Option value="дебар">Дебар</Option>
      <Option value="кичево">Кичево</Option>
      <Option value="македонски брод">Македонски Брод</Option>
      <Option value="богданци">Богданци</Option>
      <Option value="валандово">Валандово</Option>
      <Option value="гевгелија">Гевгелија</Option>
      <Option value="радовиш">Радовиш</Option>
      <Option value="струмица">Струмица</Option>
      <Option value="демир хисар">Демир Хисар</Option>
      <Option value="крушево">Крушево</Option>
      <Option value="прилеп">Прилеп</Option>
      <Option value="ресен">Ресен</Option>
      <Option value="гостивар">Гостивар</Option>
      <Option value="тетово">Тетово</Option>
      <Option value="крива паланка">Крива Паланка</Option>
      <Option value="кратово">Кратово</Option>
    </Select>
  );
};

SelectCities.propTypes = {
  post: PropTypes.bool,
  setpostData: PropTypes.func,
  setZoomCityLocation: PropTypes.func,
};

export default SelectCities;
