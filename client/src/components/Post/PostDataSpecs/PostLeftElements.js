import styled from "styled-components";

export const MainLeft = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60rem;
`;

export const DataLeftTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;

  label {
    color: #737373;
    font-family: "Times New Roman", Times, serif;
    font-size: 15px;
    margin-bottom: 8px;
  }

  textarea {
    height: 8rem;
    resize: none;
    font-size: 1rem;
    font-family: "Times New Roman", Times, serif;
  }

  input,
  textarea {
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

  input:focus,
  textarea:focus {
    border: 1px solid #ff5a3c;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #737373;
    font-family: "Times New Roman", Times, serif;
    font-size: 15px;
    margin-bottom: 8px;
  }

  input {
    color: #595959;
    background: #fff;
    border: none;
    outline: none;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    border: 1px solid #cdcdcd;
    border-radius: 4px;
  }

  input:focus {
    border: 1px solid #ff5a3c;
  }
`;

export const DataLeftBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 13rem);
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  width: 30rem;
  align-items: center;
`;

export const Select = styled.select`
  color: #737373;
  background: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #cdcdcd;
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

export const Option = styled.option``;

export const AddButton = styled.button`
  width: ${(props) => (props.images ? "14rem" : "auto")};
  margin: 3.5rem 0;
  padding: 1rem;
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

  &.disable {
    pointer-events: none;
    cursor: not-allowed;
  }

  &:hover {
    background: #ff5a3c;
  }
`;

export const ErrMsg = styled.p`
  color: red;
  font-size: 12px;
  margin-bottom: 5px;
  place-self: center start;
`;
