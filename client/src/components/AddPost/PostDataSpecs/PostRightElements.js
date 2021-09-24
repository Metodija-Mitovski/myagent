import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

export const MainRight = styled.main`
  flex: 1;
  height: 60rem;
`;

export const DataRightTop = styled.div`
  display: flex;

  .address {
    display: flex;
    flex-direction: column;
  }

  label {
    color: #737373;
    font-family: "Times New Roman", Times, serif;
    font-size: 15px;
    margin-bottom: 8px;
  }

  input {
    color: #595959;
    width: 28rem;
    background: #fff;
    border: none;
    outline: none;
    padding: 1rem;
    border: 1px solid #cdcdcd;
    margin-right: 1rem;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  input:focus {
    border: 1px solid #ff5a3c;
  }
`;

export const FindButton = styled.button`
  margin-top: 1.7rem;
  margin-bottom: 2.2rem;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  color: #fff;
  cursor: pointer;
  border: none;
  background: #0f408a;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  -webkit-box-shadow: 1px 1px 8px 0px rgba(56, 56, 56, 1);
  -moz-box-shadow: 1px 1px 8px 0px rgba(56, 56, 56, 1);
  box-shadow: 1px 1px 8px 0px rgba(56, 56, 56, 1);

  &:hover {
    background: #ff5a3c;
  }
`;

export const DataRightMap = styled.div`
  width: 39rem;
  height: 37rem;
`;

export const MapHolder = styled.div`
  width: 100%;
  height: 32rem;
`;

export const MapInstructionsHolder = styled.div`
  width: 100%;
  height: 5rem;
  padding: 5px;
  p {
    font-size: 13px;
    margin-top: 8px;
    color: red;
  }
`;

export const DataRightBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 18rem);
  grid-column-gap: 3rem;
  grid-row-gap: 0.5rem;
  align-items: center;
  margin-bottom: 2rem;
`;

export const MarkerPin = styled(FaMapMarkerAlt)`
  background: transparent;
  color: red;
  font-size: 1.5rem;
`;
