import { useSelector } from "react-redux";

import {
  Header,
  LogoWrapper,
  Nav,
  NavList,
  NavLink,
  ScrollLink,
} from "./NavbarElements";
import Loader from "../Loader/Loader";

import { LoginRegister, MyProfile } from "./NavBarUtils";

import logo from "../../static/images/logo.png";

const NavBar = (props) => {
  const user = useSelector((state) => state.user);

  const setActiveLink = (e) => {
    const list = document.querySelector("ul");
    const listLinks = list.querySelectorAll(".nav-link");
    listLinks.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <Header>
      <LogoWrapper>
        <img src={logo} alt="Logo" className="logo-img" />
      </LogoWrapper>
      <Nav>
        <NavList onClick={(e) => setActiveLink(e)}>
          <li>
            <NavLink
              to="/"
              className={props.home ? "active nav-link" : "nav-link"}
            >
              Почетна
            </NavLink>
          </li>
          <li>
            <ScrollLink
              className="nav-link"
              to="latestPosts"
              smooth={true}
              duration={800}
              onClick={(e) => {
                setActiveLink(e);
              }}
            >
              Новости
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="nav-link"
              to="ourGoals"
              smooth={true}
              duration={800}
              onClick={(e) => {
                setActiveLink(e);
              }}
            >
              Услуги
            </ScrollLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              {" "}
              Контакт
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className="nav-link">
              Пребарување
            </NavLink>
          </li>
          <li>
            <NavLink
              className="add-property-btn"
              // to={user.isLoggedIn ? "/post/create" : "/login"}
              to="/post/create"
            >
              Додади недвижност
            </NavLink>
          </li>
        </NavList>
        {user.isFetching ? (
          <Loader />
        ) : user.isLoggedIn ? (
          <MyProfile user={user} />
        ) : (
          <LoginRegister />
        )}
      </Nav>
    </Header>
  );
};

export default NavBar;
