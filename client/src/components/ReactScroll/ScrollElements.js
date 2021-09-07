import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";

export const ToTop = styled.div`
  width: 40px;
  height: 40px;
  background: #ff5a3c;
  position: fixed;
  bottom: 2%;
  right: 1%;
  z-index: 20;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: all 0.5s ease;
  -webkit-box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);
  -moz-box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);
  box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);

  &.active {
    opacity: 0.8;
  }

  &.active:hover {
    background: #0f408a;
    opacity: 0.8;
  }
`;

export const ArrowUp = styled(MdKeyboardArrowUp)`
  color: #fff;
  transform: rotate(-45deg);
  font-size: 1.5rem;
  font-weight: 900;
`;
