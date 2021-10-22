import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { userLogout } from "../../state/action-creators/user-actions";

import {
  Login,
  LoginLink,
  NameOptionWrapper,
  OptionList,
  OptionLink,
} from "./NavbarElements";

//icons
import { BiLogIn } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { SiWish } from "react-icons/si";

import noAvatar from "../../static/images/noAvatar.png";

export const LoginRegister = () => {
  return (
    <Login>
      <BiLogIn className="login-icon" />
      <LoginLink to="/login">најава</LoginLink>/{" "}
      <LoginLink to="/register">регистрација</LoginLink>
    </Login>
  );
};

export const MyProfile = ({ user }) => {
  const [isListOpen, setIsListopen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    if (isListOpen) {
      e.target.parentElement.lastElementChild.style.visibility = "collapse";
      e.target.parentElement.lastElementChild.style.opacity = "0";
    } else {
      e.target.parentElement.lastElementChild.style.visibility = "visible";
      e.target.parentElement.lastElementChild.style.opacity = "1";
    }

    setIsListopen(!isListOpen);
  };

  return (
    <NameOptionWrapper>
      <img src={user.profileImg.url ? user.profileImg.url : noAvatar} alt="" />
      <span
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {user.firstName} {user.lastName}
        <IoIosArrowDown
          style={{
            color: "#ff5a3c",
            marginLeft: "0.3rem",
            pointerEvents: "none",
          }}
        />
      </span>

      <OptionList>
        <li>
          <OptionLink to="/profile">
            Мој профил <FaUserAlt />
          </OptionLink>
        </li>
        <li>
          <OptionLink to="/wishlist">
            Листа на желби <SiWish />
          </OptionLink>
        </li>
        <li
          onClick={() => {
            dispatch(userLogout());
            history.push("/");
          }}
        >
          <OptionLink>
            Одјави се <RiLogoutBoxRLine />
          </OptionLink>
        </li>
      </OptionList>
    </NameOptionWrapper>
  );
};

MyProfile.propTypes = {
  user: PropTypes.object,
};
