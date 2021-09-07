import styled from "styled-components";

import { BsThreeDots } from "react-icons/bs";

export const ImgWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  width: 9rem;
  height: 8.5rem;
  background-color: "#0000ff";
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #66787d;

  transform: translate(-50%, -55%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImgOptionForm = styled.div`
  position: absolute;
  width: 9rem;
  top: -11%;
  left: 44.6%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  label {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
    padding: 0.4rem 2rem;
  }

  input[type="file"] {
    display: none;
  }
`;

export const ImgOptIcon = styled(BsThreeDots)`
  color: #ff5a3c;
  cursor: pointer;
  font-size: 1.3rem;
  margin: 0 8px 5px 0;
`;

export const ImgOptList = styled.ul`
  list-style: none;
  height: 0;
  overflow: hidden;
  transition: 0.3s ease-in-out;

  li {
    color: #66787d;
    background: #fff;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #dfe5e7;
  }

  li:hover {
    color: #fff;
    background: #1b2840;
  }

  &.showList {
    height: 5rem;
  }

  li:nth-of-type(2) {
    padding: 0.4rem 2rem;
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  color: #ff3300;
`;

export const ErrorHolder = styled.p`
  position: absolute;
  top: 5%;
  left: 55%;
  color: #ff3300;
`;
