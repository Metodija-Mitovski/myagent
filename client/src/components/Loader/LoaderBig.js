import styled, { keyframes } from "styled-components";

const animate = keyframes`
 0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

const Loader = styled.div`
  background: #0f408a;
  -webkit-animation: ${animate} 1s infinite ease-in-out;
  animation: ${animate} 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  color: #ff5a3c;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &::before,
  &::after {
    background: #0f408a;
    -webkit-animation: ${animate} 1s infinite ease-in-out;
    animation: ${animate} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
    top: 0;
    content: "";
  }

  &::before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &::after {
    left: 1.5em;
  }
`;

const LoaderBig = () => {
  return (
    <div style={{ height: "100px" }}>
      <Loader />
    </div>
  );
};

export default LoaderBig;
