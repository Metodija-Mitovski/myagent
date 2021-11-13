import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfilePassword from "./ProfilePassword";
import ProcesBtn from "./ProcessBtn";
import {
  updateAccDataRequest,
  clearUpdateAccErr,
} from "../../state/action-creators/user-actions";

import {
  InfoWrapper,
  UserDataForm,
  UserDataWrapper,
  Error,
} from "./ProfileDataElements";

const ProfileData = () => {
  const user = useSelector((state) => state.user);
  let { errorMsg } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [updateUserData, setupdateUserData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });

  useEffect(() => {
    return () => {
      dispatch(clearUpdateAccErr());
    };
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateAccDataRequest(updateUserData));
  };

  return (
    <InfoWrapper>
      <UserDataForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <UserDataWrapper>
          <label htmlFor="name">Име:</label>
          <input
            type="text"
            id="name"
            required
            value={updateUserData.firstName}
            onChange={(e) => {
              setupdateUserData({
                ...updateUserData,
                firstName: e.target.value,
              });
            }}
          />
          {errorMsg != undefined && errorMsg.firstName && (
            <Error>{errorMsg.firstName.message}</Error>
          )}
        </UserDataWrapper>
        <UserDataWrapper>
          <label htmlFor="lastName">Презиме:</label>
          <input
            type="text"
            id="lastName"
            required
            value={updateUserData.lastName}
            onChange={(e) => {
              setupdateUserData({
                ...updateUserData,
                lastName: e.target.value,
              });
            }}
          />
          {errorMsg != undefined && errorMsg.lastName && (
            <Error>{errorMsg.lastName.message}</Error>
          )}
        </UserDataWrapper>
        <UserDataWrapper>
          <label htmlFor="email">И-мејл:</label>
          <input
            type="email"
            id="email"
            required
            value={updateUserData.email}
            onChange={(e) => {
              setupdateUserData({
                ...updateUserData,
                email: e.target.value,
              });
            }}
          />

          {errorMsg != undefined && errorMsg.email && (
            <Error>{errorMsg.email.message}</Error>
          )}
        </UserDataWrapper>
        {/* ----- */}
        <ProcesBtn updateUserData={updateUserData} />
      </UserDataForm>

      <ProfilePassword />
    </InfoWrapper>
  );
};

export default ProfileData;
