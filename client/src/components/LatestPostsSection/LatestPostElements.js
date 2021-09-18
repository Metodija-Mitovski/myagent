import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const LatestPostSection = styled.section`
  width: 100%;
  background: #fff;
  margin-top: 5rem;
  padding-bottom: 4rem;
`;

export const PostsContainerWrapper = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
`;

export const PostsCenter = styled.div`
  width: 90%;
  padding: 0%.5rem;
  overflow: hidden;
`;

export const Slider = styled.div`
  width: 100%;
  margin-left: 1.67%;
  display: flex;
  justify-content: space-between;
  transition: all 0.6s ease-in-out;
`;

export const LatestPostWrapper = styled.div`
  min-width: 30%;
  max-width: 30%;
  margin-right: 3.33%;
  margin-top: 10px;
  margin-bottom: 10px;
  background: rgb(247, 247, 247, 0.3);
  -webkit-box-shadow: 1px -1px 10px -1px rgba(109, 109, 122, 1);
  -moz-box-shadow: 1px -1px 10px -1px rgba(109, 109, 122, 1);
  box-shadow: 1px -1px 10px -1px rgba(109, 109, 122, 1);
`;

export const LatestPostTop = styled.div`
  position: relative;
`;

export const PostImg = styled.img`
  width: 100%;
  height: 15rem;
`;

export const SaleRentSpan = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 8px;
  background: ${(props) => (props.bg === "sale" ? "#6bd14b" : "#ff5050")};
  color: #fff;
  font-size: 14px;
  font-family: "Roboto";
`;

export const NumberOfImages = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #ff5a3c;
  background: rgba(226, 225, 225, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 4px;

  .icon {
    margin-right: 8px;
  }
`;

export const PostLink = styled(Link)`
  text-decoration: none;
`;

export const LatestPostMiddle = styled.div`
  padding: 0.3rem 1rem;
  border-bottom: 1px solid #cfcfcf;

  span {
    color: #ff5a3c;
    font-size: 1.2rem;
    font-weight: bold;
  }

  h2 {
    margin: 0.5rem 0;
    color: #4b4b4b;
    &:hover {
      color: #6b7f89;
      transition: 0.3s ease-in-out;
    }
  }

  .short-desc {
    font-size: 14px;
    font-weight: 300;
    color: #6b7f89;
    min-height: 80px;
    word-wrap: break-word;
  }
`;

export const LatestPostDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.5rem;
`;

export const LatestPostData = styled.div`
  position: relative;
  width: 5rem;
  margin-right: 1.5rem;

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #6b7f89;
    font-family: "Roboto";
    font-size: 15px;
  }

  .data-icon {
    font-size: 1.5rem;
    margin-right: 5px;
  }

  p {
    color: #6b7f89;
    font-size: 13px;
    margin-top: 5px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 3rem;
    top: 1px;
    left: 65px;

    background: #cfcfcf;
  }
`;

export const MiddleLocation = styled.div`
  margin-top: 15px;
  display: flex;

  span {
    color: #6b7f89;
    font-family: "Roboto";
    font-size: 13px;
    font-weight: 100;
    text-align: center;
  }

  .location-icon {
    color: #ff5a3c;
    margin-bottom: 5px;
  }
`;

export const LatestPostBottom = styled.div`
  position: relative;
  padding: 0.8rem 0.8rem 1rem 0.8rem;

  .post-date {
    position: absolute;
    bottom: 8px;
    right: 12px;
    font-family: "Roboto";
    font-size: 12px;
  }
`;

export const BottomData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 45px;
    height: 40px;
    border-radius: 50%;
    margin-right: 7px;
  }

  span {
    font-size: 14px;
    color: #6b7f89;
  }

  .phone-num {
    font-size: 13px;
    margin-left: 3rem;
  }
`;

export const LeftRightSlide = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideLeft = styled(MdKeyboardArrowLeft)`
  font-size: 4rem;
  color: gray;
  cursor: pointer;
  color: #ff5a3c;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: #0f408a;
  }
`;
export const SlideRight = styled(MdKeyboardArrowRight)`
  font-size: 4rem;
  color: gray;
  cursor: pointer;
  color: #ff5a3c;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: #0f408a;
  }
`;
