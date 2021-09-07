import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import {
  DashBoardSection,
  MainLeft,
  MainRight,
  ListWrapper,
  List,
  ListItem,
} from "./ProfileDBElements";

import DashInfo from "./DashInfo";
import ProfileData from "./ProfileData";
import DeleteProfile from "./DeleteProfile";
import MyPosts from "./MyPosts";
import ProfileImg from "./ProfileImg";
import { userLogout } from "../../state/action-creators/user-actions";

//icons
import { IoIosHome } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { RiDeleteBin6Fill, RiLogoutBoxRLine } from "react-icons/ri";
import { HiOutlineDocumentText } from "react-icons/hi";

const ProfileDashboard = () => {
  const [activeComp, setActiveComp] = useState({
    dashInfo: true,
    myPosts: false,
    profileData: false,
    deleteAcc: false,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const setActiveLink = (e) => {
    const listLinks = document.querySelectorAll(".dash-link");
    listLinks.forEach((link) => {
      link.classList.remove("active");
    });

    e.target.classList.add("active");
  };

  return (
    <DashBoardSection>
      <ProfileImg />
      <MainLeft>
        <ListWrapper>
          <List>
            <ListItem
              className="active dash-link"
              onClick={(e) => {
                setActiveLink(e);
                setActiveComp({
                  ...activeComp,
                  dashInfo: true,
                  myPosts: false,
                  profileData: false,
                  deleteAcc: false,
                });
              }}
            >
              Контролна табла
              <IoIosHome style={{ pointerEvents: "none" }} className="icon" />
            </ListItem>
            <ListItem
              className="dash-link"
              onClick={(e) => {
                setActiveLink(e);
                setActiveComp({
                  ...activeComp,
                  dashInfo: false,
                  myPosts: true,
                  profileData: false,
                  deleteAcc: false,
                });
              }}
            >
              Мој постови
              <HiOutlineDocumentText
                style={{ pointerEvents: "none" }}
                className="icon"
              />
            </ListItem>
            <ListItem
              className="dash-link"
              onClick={(e) => {
                setActiveLink(e);
                setActiveComp({
                  ...activeComp,
                  dashInfo: false,
                  myPosts: false,
                  profileData: true,
                  deleteAcc: false,
                });
              }}
            >
              Детали за профил
              <FaUserAlt style={{ pointerEvents: "none" }} className="icon" />
            </ListItem>
            <ListItem
              className="dash-link"
              onClick={(e) => {
                setActiveLink(e);
                setActiveComp({
                  ...activeComp,
                  dashInfo: false,
                  myPosts: false,
                  profileData: false,
                  deleteAcc: true,
                });
              }}
            >
              Избриши профил
              <RiDeleteBin6Fill
                style={{ pointerEvents: "none" }}
                className="icon"
              />
            </ListItem>
            <ListItem
              className="dash-link"
              onClick={(e) => {
                setActiveLink(e);
                dispatch(userLogout());
                history.push("/");
              }}
            >
              Одјави се
              <RiLogoutBoxRLine
                style={{ pointerEvents: "none" }}
                className="icon"
              />
            </ListItem>
          </List>
        </ListWrapper>
      </MainLeft>
      <MainRight>
        {activeComp.dashInfo && <DashInfo />}
        {activeComp.myPosts && <MyPosts />}
        {activeComp.profileData && <ProfileData />}
        {activeComp.deleteAcc && <DeleteProfile />}
      </MainRight>
    </DashBoardSection>
  );
};

export default ProfileDashboard;
