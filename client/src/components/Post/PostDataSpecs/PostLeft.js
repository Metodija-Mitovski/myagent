import {
  MainLeft,
  DataLeftTop,
  DataLeftBottom,
  Select,
  Option,
  Wrapper,
  AddButton,
} from "./PostLeftElements";

const PostLeft = () => {
  return (
    <MainLeft>
      <DataLeftTop>
        <label htmlFor="title">Наслов</label>
        <input type="text" id="title" placeholder="максимум карактери:30" />
        <label htmlFor="shortDesc">Краток Опис</label>
        <textarea id="shortDesc" placeholder="максимум карактери:150" />
        <label htmlFor="desc">Опис</label>
        <textarea id="desc" placeholder="максимум карактери:1000" />
        <label htmlFor="price">Цена:</label>
        <input type="text" id="price" placeholder="цена во €" />
      </DataLeftTop>
      <DataLeftBottom>
        {/* ---- */}
        <Wrapper>
          <label htmlFor="purpose">Намена:</label>
          <Select id="purpose">
            <Option>продажба</Option>
            <Option>изнајмување</Option>
          </Select>
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="type">Тип:</label>
          <Select id="type">
            <Option>стан</Option>
            <Option>куќа</Option>
            <Option>гарсоњера</Option>
            <Option>студио</Option>
          </Select>
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="rooms">Соби:</label>
          <input type="text" id="rooms" placeholder="број" />
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="baths">Бањи:</label>
          <input type="text" id="baths" placeholder="број" />
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="area">Површина:</label>
          <input type="text" id="area" placeholder="m2" />
        </Wrapper>
        {/* ---- */}
        <Wrapper>
          <label htmlFor="area">Тераси:</label>
          <input type="text" id="area" placeholder="број" />
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="type">Паркинг:</label>
          <Select id="type">
            <Option>да</Option>
            <Option>не</Option>
          </Select>
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="contact-number">Контакт број:</label>
          <input type="text" id="contact-number" />
        </Wrapper>
        {/* ----- */}
        <AddButton type="submit">Додади</AddButton>
      </DataLeftBottom>
    </MainLeft>
  );
};

export default PostLeft;
