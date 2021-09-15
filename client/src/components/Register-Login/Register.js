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
//

const Register = () => {
  const [userData, setUserData] = useState({});
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [errors, setErrors] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    passMatch: null,
    server: null,
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check for same password
    if (userData.password !== confirmPassword) {
      setErrors({
        ...errors,
        passMatch: "пасвродот на двете полиња мора да биде ист",
      });
      setIsFetching(false);
      return;
    }

    try {
      await axios.post("http://localhost:5000/user/signup", {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
      });

      setSuccessMsg("Успешна најава може да се најавите на вашиот профил");
      setIsFetching(false);

      setTimeout(() => {
        history.push("/login");
      }, 1500);
    } catch (err) {
      setIsFetching(false);
      if (!err.response) {
        setErrors({
          ...errors,
          server: "Серверска грешка, обидете се повторно",
        });
        return;
      }

      if (err.response.data.message) {
        setErrors({ ...errors, email: err.response.data.message });
        return;
      } else {
        setErrors({ ...err.response.data, passMatch: errors.passMatch });
      }
    }
  };

  return (
    <>
      <RegisterDataSection>
        <RegisterForm
          onSubmit={(e) => {
            setIsFetching(true);
            // clear shown errors
            setErrors({});
            handleSubmit(e);
          }}
        >
          {/* --- */}
          <DataWrapper>
            <DataInput
              required
              type="text"
              placeholder="Име"
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
            />
            <ErrorHolder>
              {errors.firstName ? errors.firstName : ""}
            </ErrorHolder>
          </DataWrapper>
          {/* --- */}
          <DataWrapper>
            <DataInput
              required
              type="text"
              placeholder="Презиме"
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
            />
            <ErrorHolder>{errors.lastName ? errors.lastName : ""}</ErrorHolder>
          </DataWrapper>
          {/* --- */}
          <DataWrapper>
            <DataInput
              required
              type="email"
              placeholder="И-мејл"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <ErrorHolder>{errors.email ? errors.email : ""}</ErrorHolder>
          </DataWrapper>
          {/* --- */}
          <DataWrapper>
            <DataInput
              required
              type="password"
              placeholder="Лозинка"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <ErrorHolder>{errors.password ? errors.password : ""}</ErrorHolder>
          </DataWrapper>
          {/* --- */}
          <DataWrapper>
            <DataInput
              required
              type="password"
              placeholder="Потврди лозинка"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <ErrorHolder>
              {errors.passMatch ? errors.passMatch : ""}
            </ErrorHolder>
          </DataWrapper>
          {/* --- */}
          <SubmitBtn>{isFetching ? <LoadSpinner /> : "Регистрација"}</SubmitBtn>
          <ErrorHolder>
            {errors.server ? errors.server : successMsg}
          </ErrorHolder>

          <LoginRegisterLink to="/login">Веќе имате профил ?</LoginRegisterLink>
        </RegisterForm>
      </RegisterDataSection>
    </>
  );
};

export default Register;
