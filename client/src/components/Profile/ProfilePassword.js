import { useState } from "react";
import {
  UserPasswordForm,
  UserDataWrapper,
  Error,
  ButtonWrapper,
} from "./ProfileDataElements";

import axios from "axios";
import api from "../../api/api";
import Loader from "../Loader/Loader";

const ProfilePassword = () => {
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirmNew: "",
  });

  const [isFetching, setIsFetching] = useState(false);
  const [infoMsg, setInfoMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // clear error
    setInfoMsg("");
    setIsFetching(true);

    if (password.new !== password.confirmNew) {
      setInfoMsg("пасвордот мора да биде ист на двете полиња");
      setIsFetching(false);
      return;
    }

    try {
      const res = await axios.patch(
        `${api.rootUser}/update`,
        {
          currentPassword: password.current,
          newPassword: password.new,
        },
        { withCredentials: true }
      );

      if (res.status === 200) {
        setInfoMsg("Успешна промена на пасворд");
        setIsFetching(false);
        setPassword({
          current: "",
          new: "",
          confirmNew: "",
        });
      }
    } catch (error) {
      setInfoMsg(error.response.data);
      setIsFetching(false);
    }
  };

  return (
    <UserPasswordForm onSubmit={(e) => handleSubmit(e)}>
      <h3>Промена на пасворд:</h3>
      <UserDataWrapper pass>
        <label htmlFor="name">Внеси пасворд:</label>
        <input
          type="password"
          id="name"
          value={password.current}
          onChange={(e) => {
            setPassword({ ...password, current: e.target.value });
          }}
        />
      </UserDataWrapper>
      <UserDataWrapper pass>
        <label htmlFor="name">Внеси нов пасворд:</label>
        <input
          type="password"
          id="name"
          value={password.new}
          onChange={(e) => {
            setPassword({ ...password, new: e.target.value });
          }}
        />
      </UserDataWrapper>
      <UserDataWrapper pass>
        <label htmlFor="name">Потврди нов пасворд:</label>
        <input
          type="password"
          id="name"
          value={password.confirmNew}
          onChange={(e) => {
            setPassword({ ...password, confirmNew: e.target.value });
          }}
        />
        {infoMsg && <Error>{infoMsg}</Error>}
      </UserDataWrapper>

      {isFetching ? (
        <ButtonWrapper>
          <button>
            <Loader />
          </button>
        </ButtonWrapper>
      ) : password.current && password.new && password.confirmNew ? (
        <ButtonWrapper updating={true}>
          <button>Промени</button>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <button disabled>Промени</button>
        </ButtonWrapper>
      )}
    </UserPasswordForm>
  );
};

export default ProfilePassword;
