import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegisterDataSection = styled.section`
  background: #fff;
  display: flex;
  align-self: center;
  justify-content: center;
  padding-top: 3rem;
  -webkit-box-shadow: 1px -1px 9px -4px rgba(62, 66, 117, 1);
  -moz-box-shadow: 1px -1px 9px -4px rgba(62, 66, 117, 1);
  box-shadow: 1px -1px 9px -4px rgba(62, 66, 117, 1);
  padding: 4rem 0 5rem 0;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DataWrapper = styled.div``;

export const DataInput = styled.input`
  width: 25rem;
  padding: 1rem;

  font-size: 1rem;
  outline: none;
  border-radius: 4px;
  border: 1px solid #808080;
  color: #0f408a;

  &:focus {
    border-color: #ff5a3c;
  }
`;

export const SubmitBtn = styled.button`
  width: 25rem;
  padding: 1rem;
  margin-top: 1.4rem;
  cursor: pointer;
  background: #ff5a3c;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 1.2rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;

  &:hover {
    background: #0f408a;
  }
`;

export const ErrorHolder = styled.p`
  margin: 5px;
  margin-bottom: 1.2rem;
  color: #ff3300;
`;

export const SuccessPar = styled.p`
  color: blue;
  margin: 0.8rem;
  color: #1158a6;
`;

export const LoginRegisterLink = styled(Link)`
  color: #0f408a;
  text-decoration: none;
  font-weight: 100;
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ff5a3c;
  }
`;
