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
  const { postData, setPostData, errMsg, isFetching, isFetchSuccess } = props;

  return (
    <MainLeft>
      <DataLeftTop>
        <label htmlFor="title">Наслов</label>
        <input
          type="text"
          id="title"
          placeholder="максимум карактери:30"
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />
        {errMsg.title && <ErrMsg>{errMsg.title}</ErrMsg>}
        {/* --- */}
        <label htmlFor="shortDesc">Краток Опис</label>
        <textarea
          id="shortDesc"
          placeholder="максимум карактери:150"
          onChange={(e) => {
            setPostData({ ...postData, shortDesc: e.target.value });
          }}
        />
        {errMsg.shortDesc && <ErrMsg>{errMsg.shortDesc}</ErrMsg>}
        {/* --- */}
        <label htmlFor="desc">Опис</label>
        <textarea
          id="desc"
          placeholder="максимум карактери:1000"
          onChange={(e) => {
            setPostData({ ...postData, desc: e.target.value });
          }}
        />
        {errMsg.desc && <ErrMsg>{errMsg.desc}</ErrMsg>}
        {/* --- */}
        <label htmlFor="price">Цена:</label>
        <input
          type="text"
          id="price"
          placeholder="цена во €"
          onChange={(e) => {
            setPostData({ ...postData, price: e.target.value });
          }}
        />
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
          {errMsg.purpose && <ErrMsg>{errMsg.purpose}</ErrMsg>}
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
          {errMsg.realEstateType && <ErrMsg>{errMsg.realEstateType}</ErrMsg>}
          {/* --- */}
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="rooms">Соби:</label>
          <input
            type="text"
            id="rooms"
            placeholder="број"
            onChange={(e) => {
              setPostData({
                ...postData,
                specs: { ...postData.specs, bedrooms: e.target.value },
              });
            }}
          />
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="baths">Бањи:</label>
          <input
            type="text"
            id="baths"
            placeholder="број"
            onChange={(e) => {
              setPostData({
                ...postData,
                specs: { ...postData.specs, baths: e.target.value },
              });
            }}
          />
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="area">Површина:</label>
          <input
            type="text"
            id="area"
            placeholder="m2"
            onChange={(e) => {
              setPostData({
                ...postData,
                specs: { ...postData.specs, area: e.target.value },
              });
            }}
          />
        </Wrapper>
        {/* ---- */}
        <Wrapper>
          <label htmlFor="area">Тераси:</label>
          <input
            type="text"
            id="area"
            placeholder="број"
            onChange={(e) => {
              setPostData({
                ...postData,
                specs: { ...postData.specs, balcony: e.target.value },
              });
            }}
          />
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
            <Option value="">избери</Option>
            <Option value={true}>да</Option>
            <Option value={false}>не</Option>
          </Select>
        </Wrapper>
        {/* ----- */}
        <Wrapper>
          <label htmlFor="contact-number">Контакт број:</label>
          <input
            type="text"
            id="contact-number"
            onChange={(e) => {
              setPostData({ ...postData, contactNumber: e.target.value });
            }}
          />
          {errMsg.contactNumber && <ErrMsg>{errMsg.contactNumber}</ErrMsg>}
          {/* --- */}
        </Wrapper>
        {/* ----- */}
        <AddButton className={isFetching ? "disable" : ""} type="submit">
          {isFetching ? <LoadSpinner /> : "Додади"}
        </AddButton>
        {errMsg.serverErr && <ErrMsg>{errMsg.serverErr}</ErrMsg>}
        {isFetchSuccess && (
          <p style={{ color: "#0f408a" }}>
            Успешно додаден пост може да додадете слики
          </p>
        )}
      </DataLeftBottom>
    </MainLeft>
  );
};

PostLeft.propTypes = {
  postData: PropTypes.object.isRequired,
  setPostData: PropTypes.func.isRequired,
  errMsg: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFetchSuccess: PropTypes.bool.isRequired,
};

export default PostLeft;
