import styled from "styled-components";
import { Link as RLink } from "react-router-dom";

export const MyPostsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .icon-left,
  .icon-right {
    font-size: 2rem;
  }

  h2 {
    color: #46474a;
  }
`;

export const SlideLeft = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slider = styled.div`
  width: 100%;

  height: 100%;
  display: flex;
  transition: all 0.3s ease-in-out;

  &:nth-child(odd) {
    margin-left: 5%;
  }
`;

export const SlideCenter = styled.div`
  height: 110%;
  flex: 10;
  overflow: hidden;
`;

export const SlideRight = styled.div`
  height: 100%;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  color: #ff5a3c;
  transition: all 0.4s ease-in-out;

  &:hover {
    color: #0f408a;
  }
`;

// single post
export const PostLink = styled(RLink)`
  text-decoration: none;
`;

export const Post = styled.div`
  min-width: 40%;
  max-width: 40%;
  height: 90%;
  margin-right: 10%;
  position: relative;
  background: #f9f9f9;

  -webkit-box-shadow: 1px -1px 10px -1px rgba(109, 109, 122, 1);
  -moz-box-shadow: 1px -1px 10px -1px rgba(109, 109, 122, 1);
  box-shadow: 1px -1px 10px -1px rgba(109, 109, 122, 1);

  .title {
    color: #ff5a3c;
    color: #1b2840;
  }

  .price {
    color: #ff5a3c;
    font-size: 13px;
    margin-top: 4px;
  }
`;

export const ImagesWrapper = styled.div`
  img {
    width: 100%;
    height: 12rem;
  }
`;

export const TitlePriceWrapper = styled.div`
  padding: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const PostButton = styled.button`
  -webkit-box-shadow: 0px 5px 10px -3px rgba(40, 38, 48, 1);
  -moz-box-shadow: 0px 5px 10px -3px rgba(40, 38, 48, 1);
  box-shadow: 0px 5px 10px -3px rgba(40, 38, 48, 1);

  border: none;
  border-radius: 4px;
  background: ${(props) => (props.edit ? "#0f408a" : "#db5454")};
  cursor: pointer;
  color: #fff;
  padding: 0.5rem 0.7rem;
  font-size: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => (props.edit ? "#0e4eae" : "#f53131")};
  }
`;

/////////// modal

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(250, 250, 250, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: #1b2840;
  }
`;
export const DeleteBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #ff5a3c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 1rem 0 2rem 0;
  background: transparent;

  .check-icon {
    font-size: 2.5rem;
    color: #0f408a;
    opacity: 0.6;
    pointer-events: none;
  }

  &:hover {
    background: #0f408a;
  }

  &:hover .check-icon {
    color: #fff;
    opacity: 1;
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 5px;
  right: 7px;
  background: none;
  border: none;
  color: #ff5a3c;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #0f408a;
  }
`;
