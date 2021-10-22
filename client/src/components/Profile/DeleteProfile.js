import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAccountRequest } from "../../state/action-creators/user-actions";

import { InfoWrapper } from "./DashInfoElements";
import {
  UserPasswordForm,
  UserDataWrapper,
  ButtonWrapper,
  Error,
} from "./ProfileDataElements";
import Loader from "../Loader/Loader";

const DeleteProfile = () => {
  const [password, setPassword] = useState("");

  const [infoMsg, setInfoMsg] = useState("");
  const user = useSelector((state) => state.user);

  const { isFetching, errorMsg } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // clear infoMsg
    setInfoMsg("");

    dispatch(deleteAccountRequest(password));
  };

  useEffect(() => {
    if (!user._id) {
      setInfoMsg("Профилот е успешно деактивиран");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  }, [setInfoMsg, user._id]);

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
            }}
          />
          {(errorMsg && <Error>{errorMsg}</Error>) ||
            (infoMsg && <Error>{infoMsg}</Error>)}
        </UserDataWrapper>

        {isFetching ? (
          <ButtonWrapper>
            <button>
              <Loader />
            </button>
          </ButtonWrapper>
        ) : password.length > 0 ? (
          <ButtonWrapper updating={true}>
            <button>Деактивирај профил</button>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
            <button disabled>Деактивирај</button>
          </ButtonWrapper>
        )}
      </UserPasswordForm>
    </>
  );
};

export default DeleteProfile;
