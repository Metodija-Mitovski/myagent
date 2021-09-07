import styled from "styled-components";
import { Link } from "react-router-dom";

export const LatestPostSection = styled.section`
  width: 100%;
  background: #fff;
  margin-top: 4.5rem;
  padding: 5rem 0;
`;

export const PostsContainerWrapper = styled.div`
  display: grid;
  padding: 1.5rem 2rem;
  grid-template-columns: repeat(3, 25%);
  grid-gap: 3rem;
  justify-content: center;
`;

export const LatestPostWrapper = styled.div`
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
`;

export const SaleRentSpan = styled.span`
  position: absolute;
  top: 0.8rem;
  right: 0.5rem;
  padding: 5px;
  background: #6bd14b;
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
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  .icon {
    margin-right: 8px;
  }
`;

export const PostLink = styled(Link)`
  text-decoration: none;
`;

export const LatestPostMiddle = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #cfcfcf;

  span {
    color: #ff5a3c;
    font-size: 1.2rem;
    font-weight: bold;
  }

  h2 {
    margin: 0.8rem 0;
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
  }
`;

export const LatestPostDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.2rem;
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
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem;

  .post-date {
    position: absolute;
    bottom: 4px;
    right: 8px;
    font-family: "Roboto";
    font-size: 12px;
  }
`;

export const BottomImg = styled.div`
  display: flex;
  align-items: center;
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
