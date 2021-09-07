import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 45rem;
`;

export const UserDataForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 20rem);
  justify-content: center;
  grid-column-gap: 4rem;
  grid-row-gap: 2rem;
  margin-bottom: 5rem;
`;

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ pass }) => (pass ? "1.5rem" : "0")};

  label {
    font-size: 14px;
    color: #66787d;
    margin: 5px 0;
  }

  input {
    padding: 1.2rem 1rem;
    border: none;
    outline: none;
    font-size: 16px;
    border: 2px solid #dfe5e7;
    color: #66787d;
  }

  input:focus {
    border: 1px solid #ff5a3c;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: ${({ pass }) => pass && "4rem"};

  button {
    width: 100%;
    width: ${({ pass }) => (pass ? "19rem" : "100%")};
    height: 4rem;
    color: #fff;
    cursor: ${({ updating }) => (updating ? "pointer" : "not-allowed")};
    border: none;
    border-radius: 4px;
    background: ${({ updating }) => (updating ? "#0f408a" : "#ff9191")};
    font-size: 1rem;
  }
`;

export const UserPasswordForm = styled.form`
  border: 2px solid #dfe5e7;
  padding: 2rem 2rem 3rem 2rem;
  width: 45rem;

  h3 {
    color: #818181;
    margin-bottom: 1rem;
  }
`;

export const Error = styled.p`
  color: #ff3300;
  font-size: 14px;
  margin-top: 4px;
`;
