import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ProcesBtn from "./ProcessBtn";

import { InfoWrapper } from "./DashInfoElements";
import {
  UserPasswordForm,
  UserDataWrapper,
  Error,
} from "./ProfileDataElements";

const DeleteProfile = () => {
  const [password, setPassword] = useState("");
  const [isUpdatingData, setIsupdatingData] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [infoMsg, setInfoMsg] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // clear infoMsg
    setInfoMsg("");
    setIsFetching(true);

    if (!password) {
      setInfoMsg("Невалиден пасворд");
      setIsFetching(false);
      return;
    }

    try {
      const res = await axios.delete(
        `http://localhost:5000/user/delete/${password}`,
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        setInfoMsg("Профилот е успешно деактивиран");
        setIsFetching(false);
        setPassword("");

        setTimeout(() => {
          history.push("/");
        }, 1000);
      }
    } catch (error) {
      setInfoMsg(error.response.data);
      setIsFetching(false);
    }
  };

  return (
    <>
      <InfoWrapper>
        <p>За деактивација на вашиот профил внесете пасворд</p>
      </InfoWrapper>

      <UserPasswordForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h3>Деактивација на профил:</h3>
        <UserDataWrapper pass>
          <label htmlFor="name">Внеси пасворд:</label>
          <input
            type="password"
            id="name"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsupdatingData(true);
            }}
          />
          {infoMsg && <Error>{infoMsg}</Error>}
        </UserDataWrapper>
        <ProcesBtn isUpdatingData={isUpdatingData} isFetching={isFetching} />
      </UserPasswordForm>
    </>
  );
};

export default DeleteProfile;
