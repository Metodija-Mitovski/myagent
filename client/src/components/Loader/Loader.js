import styled, { keyframes } from "styled-components";

const RotateAnimation = keyframes`
 0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Holder = styled.div`
  margin: auto;
  text-indent: -9999em;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(
    left,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(
    to right,
    #ffffff 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: ${RotateAnimation} 1.4s infinite linear;
  animation: ${RotateAnimation} 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  animation: ${RotateAnimation} 1.4s infinite linear;

  &::before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &::after {
    background: #0f408a;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const LoadSpinner = () => {
  return <Holder />;
};

export default LoadSpinner;
