import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

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
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsFetching(true);
    //clear shown errors
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        {
          email: loginData.email,
          password: loginData.password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setIsFetching(false);
        history.push("/");
      } else {
        throw new Error();
      }
    } catch (error) {
      if (!error.response) {
        setError("Серверска грешка, обидете се повторно");
        setIsFetching(false);
        return;
      }

      setError(error.response.data);
      setIsFetching(false);
    }
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
            <ErrorHolder>{error ? error : ""}</ErrorHolder>
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
