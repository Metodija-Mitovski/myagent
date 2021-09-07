import { Select, Option } from "./QueryUtilElements";

const SelectCities = (props) => {
  return (
    <Select post={props.post ? true : false} name="city" id="city">
      <Option value="choosecity">град:</Option>
      <Option value="choosecity">Цела Македонија</Option>
      <Option value="choosecity">Скопје</Option>
      <Option value="choosecity">Охрид</Option>
      <Option value="choosecity">Струга</Option>
      <Option value="choosecity">Дојран</Option>
      <Option value="choosecity">Куманово</Option>
      <Option value="choosecity">Битола</Option>
      <Option value="choosecity">Штип</Option>
      <Option value="choosecity">Велес</Option>
      <Option value="choosecity">Демир Капија</Option>
      <Option value="choosecity">Кавадарци</Option>
      <Option value="choosecity">Неготино</Option>
      <Option value="choosecity">Свети Николе</Option>
      <Option value="choosecity">Берово</Option>
      <Option value="choosecity">Виница</Option>
      <Option value="choosecity">Делчево</Option>
      <Option value="choosecity">Кочани</Option>
      <Option value="choosecity">Македонска Каменица</Option>
      <Option value="choosecity">Пехчево</Option>
      <Option value="choosecity">Пробиштип</Option>
      <Option value="choosecity">Дебар</Option>
      <Option value="choosecity">Кичево</Option>
      <Option value="choosecity">Македонски Брод</Option>
      <Option value="choosecity">Богданци</Option>
      <Option value="choosecity">Валандово</Option>
      <Option value="choosecity">Гевгелија</Option>
      <Option value="choosecity">Радовиш</Option>
      <Option value="choosecity">Струмица</Option>
      <Option value="choosecity">Демир Хисар</Option>
      <Option value="choosecity">Крушево</Option>
      <Option value="choosecity">Прилеп</Option>
      <Option value="choosecity">Ресен</Option>
      <Option value="choosecity">Гостивар</Option>
      <Option value="choosecity">Тетово</Option>
      <Option value="choosecity">Крива Паланка</Option>
      <Option value="choosecity">Кратово</Option>
    </Select>
  );
};

export default SelectCities;
