import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ProfilePassword from "./ProfilePassword";
import ProcesBtn from "./ProcessBtn";
import { updateUser } from "../../state/action-creators/user-actions";

import {
  InfoWrapper,
  UserDataForm,
  UserDataWrapper,
  Error,
} from "./ProfileDataElements";

const ProfileData = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [updateUserData, setupdateUserData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  });
  const [isUpdatingData, setIsUpdataingData] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);

    // clear errors
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
    });

    try {
      const res = await axios.patch(
        "http://localhost:5000/user/update",
        updateUserData,
        { withCredentials: true }
      );
      if (res.status === 200) {
        setIsFetching(false);
        dispatch(updateUser(res.data));
      }
    } catch (error) {
      setIsFetching(false);
      console.log(error.response);
      setErrors({ ...errors, ...error.response.data });
    }
  };

  useEffect(() => {
    if (user.firstName !== updateUserData.firstName) {
      setIsUpdataingData(true);
    } else if (user.lastName !== updateUserData.firstName) {
      setIsUpdataingData(true);
    } else if (user.email !== updateUserData.firstName) {
      setIsUpdataingData(true);
    } else {
      setIsUpdataingData(false);
    }
  }, []);

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
          {errors.firstName && <Error>{errors.firstName}</Error>}
        </UserDataWrapper>
        <UserDataWrapper>
          <label htmlFor="name">Презиме:</label>
          <input
            type="text"
            id="name"
            required
            value={updateUserData.lastName}
            onChange={(e) => {
              setupdateUserData({
                ...updateUserData,
                lastName: e.target.value,
              });
            }}
          />
          {errors.lastName && <Error>{errors.lastName}</Error>}
        </UserDataWrapper>
        <UserDataWrapper>
          <label htmlFor="name">И-мејл:</label>
          <input
            type="email"
            id="name"
            required
            value={updateUserData.email}
            onChange={(e) => {
              setupdateUserData({
                ...updateUserData,
                email: e.target.value,
              });
            }}
          />
          {errors.email && <Error>{errors.email}</Error>}
        </UserDataWrapper>
        {/* ----- */}
        <ProcesBtn isUpdatingData={isUpdatingData} isFetching={isFetching} />
      </UserDataForm>

      <ProfilePassword />
    </InfoWrapper>
  );
};

export default ProfileData;
