import { useState } from "react";
import {
  UserPasswordForm,
  UserDataWrapper,
  Error,
} from "./ProfileDataElements";

import ProcesBtn from "./ProcessBtn";
import axios from "axios";

const ProfilePassword = () => {
  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirmNew: "",
  });

  const [isUpdatingData, setIsupdatingData] = useState(false);
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
        "http://localhost:5000/user/update",
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
            setIsupdatingData(true);
          }}
        />
        {infoMsg && <Error>{infoMsg}</Error>}
      </UserDataWrapper>
      <ProcesBtn isUpdatingData={isUpdatingData} isFetching={isFetching} />
    </UserPasswordForm>
  );
};

export default ProfilePassword;
