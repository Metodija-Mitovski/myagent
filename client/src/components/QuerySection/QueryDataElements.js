import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  margin-left: 15%;
  height: 8rem;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: ${(props) => (props.search === true ? "17rem" : "-3.5rem")};
  -webkit-box-shadow: 3px 4px 18px -4px rgba(87, 87, 87, 1);
  -moz-box-shadow: 3px 4px 18px -4px rgba(87, 87, 87, 1);
  box-shadow: 3px 4px 18px -4px rgba(87, 87, 87, 1);
`;

export const QueryForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.select`
  color: #2d2d2d;
  background: #fff;
  border: none;
  outline: none;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #cdcdcd;
  margin-right: ${(props) => (props.post ? "0" : "1rem")};
  cursor: pointer;
  border-radius: 4px;

  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  }

  &:focus {
    border: 1px solid #ff5a3c;
  }
`;

export const Option = styled.option`
  color: #2d2d2d;
  cursor: pointer;
  padding: 1rem;
`;

export const SearchBtn = styled.button`
  width: 8rem;
  padding: 1rem;
  font-size: 1.2rem;
  margin-left: 1.5rem;
  background: #ff5a3c;
  border: none;
  outline: none;
  color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  -webkit-box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);
  -moz-box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);
  box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);

  &:hover {
    background: #0f408a;
    transition: all 0.5s ease;
    -webkit-box-shadow: 4px 4px 5px -3px rgba(255, 90, 60, 1);
    -moz-box-shadow: 4px 4px 5px -3px rgba(255, 90, 60, 1);
    box-shadow: 4px 4px 5px -3px rgba(255, 90, 60, 1);
  }
`;
