import { useSelector } from "react-redux";
import LoadSpinner from "../../Loader/Loader";
import PropTypes from "prop-types";

import {
  MainLeft,
  DataLeftTop,
  DataLeftBottom,
  Select,
  Option,
  Wrapper,
  AddButton,
  ErrMsg,
} from "./PostLeftElements";

const PostLeft = (props) => {
  const { postData, setPostData, isFetching, isFetchSuccess, editing } = props;
  const { errorMsg } = useSelector((state) => state.postsReducer);

  return (
    <MainLeft>
      <DataLeftTop>
        <label htmlFor="title">Наслов</label>
        <input
          type="text"
          id="title"
          placeholder="максимум карактери:30"
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />
        {errorMsg !== undefined && errorMsg.title && (
          <ErrMsg>{errorMsg.title.message}</ErrMsg>
        )}

        {/* --- */}
        <label htmlFor="desc">Опис</label>
        <textarea
          id="desc"
          placeholder="максимум карактери:1000"
          value={postData.desc}
          onChange={(e) => {
            setPostData({ ...postData, desc: e.target.value });
          }}
        />
        {errorMsg !== undefined && errorMsg.desc && (
          <ErrMsg>{errorMsg.desc.message}</ErrMsg>
        )}
        {/* --- */}
        <label htmlFor="price">Цена:</label>
        <input
          type="text"
          id="price"
          placeholder="цена во €"
          value={postData.price}
          onChange={(e) => {
            setPostData({ ...postData, price: e.target.value });
          }}
        />
        {errorMsg !== undefined && errorMsg.price && (
          <ErrMsg>{errorMsg.price.message}</ErrMsg>
        )}
      </DataLeftTop>
      <DataLeftBottom>
        {/* ---- */}
        <Wrapper>
          <label htmlFor="purpose">Намена:</label>
          <Select
            id="purpose"
            onChange={(e) => {
              setPostData({ ...postData, purpose: e.target.value });
            }}
          >
            <Option value="">избери намена</Option>
            <Option value="sale">продажба</Option>
            <Option value="rent">изнајмување</Option>
          </Select>
          {errorMsg !== undefined && errorMsg.purpose && (
            <ErrMsg>{errorMsg.purpose.message}</ErrMsg>
          )}
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="type">Тип:</label>
          <Select
            id="type"
            onChange={(e) => {
              setPostData({ ...postData, realEstateType: e.target.value });
            }}
          >
            <Option value="">избери тип</Option>
            <Option value="apartment">стан</Option>
            <Option value="house">куќа</Option>
            <Option value="studio">гарсоњера</Option>
          </Select>
          {errorMsg !== undefined && errorMsg.realEstateType && (
            <ErrMsg>{errorMsg.realEstateType.message}</ErrMsg>
          )}
          {/* --- */}
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="rooms">Соби:</label>
          <input
            type="text"
            id="rooms"
            placeholder="број"
            value={postData.specs.bedrooms}
            onChange={(e) => {
              setPostData({
                ...postData,
                specs: { ...postData.specs, bedrooms: e.target.value },
              });
            }}
          />
          {errorMsg !== undefined && errorMsg["specs.bedrooms"] && (
            <ErrMsg>{errorMsg["specs.bedrooms"].message}</ErrMsg>
          )}
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="baths">Бањи:</label>
          <input
            type="text"
            id="baths"
            placeholder="број"
            value={postData.specs.baths}
            onChange={(e) => {
              setPostData({
                ...postData,
                specs: { ...postData.specs, baths: e.target.value },
              });
            }}
          />
          {errorMsg !== undefined && errorMsg["specs.baths"] && (
            <ErrMsg>{errorMsg["specs.baths"].message}</ErrMsg>
          )}
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="area">Површина:</label>
          <input
            type="text"
            id="area"
            placeholder="m2"
            value={postData.specs.area}
            onChange={(e) => {
              setPostData({
                ...postData,
                specs: { ...postData.specs, area: e.target.value },
              });
            }}
          />
          {errorMsg !== undefined && errorMsg["specs.area"] && (
            <ErrMsg>{errorMsg["specs.area"].message}</ErrMsg>
          )}
        </Wrapper>
        {/* ---- */}
        <Wrapper>
          <label htmlFor="area">Тераси:</label>
          <input
            type="text"
            id="area"
            placeholder="број"
            value={postData.specs.balcony}
            onChange={(e) => {
              setPostData({
                ...postData,
                specs: { ...postData.specs, balcony: e.target.value },
              });
            }}
          />
          {errorMsg !== undefined && errorMsg["specs.balcony"] && (
            <ErrMsg>{errorMsg["specs.balcony"].message}</ErrMsg>
          )}
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="type">Паркинг:</label>
          <Select
            id="type"
            onChange={(e) => {
              setPostData({
                ...postData,
                specs: { ...postData.specs, parking: e.target.value },
              });
            }}
          >
            <Option>избери</Option>
            <Option value={true}>да</Option>
            <Option value={false}>не</Option>
          </Select>
          {errorMsg !== undefined && errorMsg["specs.parking"] && (
            <ErrMsg>{errorMsg["specs.parking"].message}</ErrMsg>
          )}
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="contact-number">Контакт број:</label>
          <input
            type="text"
            id="contact-number"
            value={postData.contactNumber}
            onChange={(e) => {
              setPostData({ ...postData, contactNumber: e.target.value });
            }}
          />
          {errorMsg !== undefined && errorMsg.contactNumber && (
            <ErrMsg>{errorMsg.contactNumber.message}</ErrMsg>
          )}
          {/* --- */}
        </Wrapper>
        {/* ----- */}
        <AddButton className={isFetching ? "disable" : ""} type="submit">
          {isFetching ? <LoadSpinner /> : editing ? "Зачувај" : "Додади"}
        </AddButton>
        {errorMsg !== undefined && errorMsg.serverErr && (
          <ErrMsg>{errorMsg.serverErr}</ErrMsg>
        )}
        {isFetchSuccess && (
          <p style={{ color: "#0f408a" }}>
            {editing
              ? "Успешна промена"
              : "Успешно додаден пост може да додадете слики"}
          </p>
        )}
      </DataLeftBottom>
    </MainLeft>
  );
};

PostLeft.propTypes = {
  postData: PropTypes.object.isRequired,
  setPostData: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchSuccess: PropTypes.bool.isRequired,
};

export default PostLeft;
