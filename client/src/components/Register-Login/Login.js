import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from "../../state/action-creators/user-actions";

//components

import LoadSpinner from "../Loader/Loader";

import {
  RegisterDataSection,
  RegisterForm,
  DataWrapper,
  DataInput,
  SubmitBtn,
  ErrorHolder,
  LoginRegisterLink,
} from "./RegisterElements";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const { isFetching, errorMsg } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginRequest(loginData.email, loginData.password));
  };

  return (
    <>
      <RegisterDataSection>
        <RegisterForm onSubmit={(e) => handleSubmit(e)}>
          {/* --- */}
          <DataWrapper style={{ marginBottom: "20px" }}>
            <DataInput
              required
              type="email"
              placeholder="И-мејл"
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </DataWrapper>

          {/* --- */}
          <DataWrapper>
            <DataInput
              required
              type="password"
              placeholder="Лозинка"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <ErrorHolder>{errorMsg ? errorMsg : ""}</ErrorHolder>
          </DataWrapper>
          {/* --- */}
          <SubmitBtn>
            {isFetching ? <LoadSpinner /> : "   Логирај се"}
          </SubmitBtn>
          <LoginRegisterLink to="/register">
            немате профил ? &nbsp; регистрирај се
          </LoginRegisterLink>
        </RegisterForm>
      </RegisterDataSection>
    </>
  );
};

export default Login;
