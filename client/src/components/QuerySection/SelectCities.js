import PropTypes from "prop-types";
import { Select, Option } from "./QueryUtilElements";
import updateGeoMapCenterView from "../AddPost/PostDataSpecs/utils";

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

          const location = await updateGeoMapCenterView(e.target.value);
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
      <Option value="skopje">Скопје</Option>
      <Option value="ohrid">Охрид</Option>
      <Option value="struga">Струга</Option>
      <Option value="dojran">Дојран</Option>
      <Option value="kumanovo"> Куманово</Option>
      <Option value="bitola">Битола</Option>
      <Option value="štip">Штип</Option>
      <Option value="veles">Велес</Option>
      <Option value="demir kapija">Демир Капија</Option>
      <Option value="kavadarci">Кавадарци</Option>
      <Option value="negotino">Неготино</Option>
      <Option value="sveti nikole">Свети Николе</Option>
      <Option value="berovo">Берово</Option>
      <Option value="vinica"> Виница</Option>
      <Option value="delčevo">Делчево</Option>
      <Option value="kočani">Кочани</Option>
      <Option value="македонска каменица">Македонска Каменица</Option>
      <Option value="pehčevo">Пехчево</Option>
      <Option value="probištip">Пробиштип</Option>
      <Option value="дебар">Дебар</Option>
      <Option value="kičevo">Кичево</Option>
      <Option value="makedonski brod">Македонски Брод</Option>
      <Option value="bogdanci">Богданци</Option>
      <Option value="valandovo">Валандово</Option>
      <Option value="gevgelija">Гевгелија</Option>
      <Option value="radoviš">Радовиш</Option>
      <Option value="strumica">Струмица</Option>
      <Option value="demir hisar">Демир Хисар</Option>
      <Option value="kruševo">Крушево</Option>
      <Option value="prilep">Прилеп</Option>
      <Option value="resen">Ресен</Option>
      <Option value="gostivar">Гостивар</Option>
      <Option value="tetovo">Тетово</Option>
      <Option value="kriva palanka">Крива Паланка</Option>
      <Option value="kratovo">Кратово</Option>
    </Select>
  );
};

SelectCities.propTypes = {
  post: PropTypes.bool,
  setpostData: PropTypes.func,
  setZoomCityLocation: PropTypes.func,
};

export default SelectCities;
