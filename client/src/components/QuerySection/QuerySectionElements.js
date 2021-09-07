import styled from "styled-components";
import bgImg from "../../static/images/bg1.jpg";

export const SectionMain = styled.section`
  width: 100%;
  height: calc(100vh - 7rem);
`;

export const SectionMainWrapper = styled.div`
  width: 100%;
  height: 35rem;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  z-index: 1;
`;

export const OverlayDarken = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: rgba(0, 0, 0, 0.4);
`;

export const HeadingMain = styled.h1`
  color: #dfdfdf;
  font-size: 2.8rem;
  width: 32rem;
  text-shadow: 2.5px 2.5px #424242;
  position: relative;
  top: 40px;
  left: 100px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
