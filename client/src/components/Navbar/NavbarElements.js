import styled from "styled-components";
import { Link as RLink } from "react-router-dom";
import { Link as SLink } from "react-scroll";

export const Header = styled.header`
  width: 100%;
  height: 7rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  -webkit-box-shadow: 0px 2px 46px -14px rgba(106, 161, 242, 1);
  -moz-box-shadow: 0px 2px 46px -14px rgba(106, 161, 242, 1);
  box-shadow: 0px 2px 46px -14px rgba(106, 161, 242, 1);
`;

export const LogoWrapper = styled.div`
  width: 15rem;
  height: 100%;

  .logo-img {
    width: 100%;
    height: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;

  li {
    list-style: none;
    padding: 3px 8px;
  }

  .add {
    color: blue;
  }
`;

export const NavLink = styled(RLink)`
  text-decoration: none;
  color: #0f408a;
  font-size: 1.15rem;
  transition: all 0.3s ease;

  &.active {
    color: #ff5a3c;
  }

  &:hover {
    color: #ff5a3c;
  }

  &.add-property-btn {
    color: #fff;
    background: #ff5a3c;
    padding: 1.4rem;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 1.5rem;
    -webkit-box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);
    -moz-box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);
    box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);
  }

  &.add-property-btn:hover {
    background: #0f408a;
  }
`;

export const ScrollLink = styled(SLink)`
  text-decoration: none;
  color: #0f408a;
  font-size: 1.15rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    color: #ff5a3c;
  }

  &:hover {
    color: #ff5a3c;
  }

  &.add-property-btn {
    color: #fff;
    background: #ff5a3c;
    padding: 1.4rem;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 1.5rem;
    -webkit-box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);
    -moz-box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);
    box-shadow: 1px 0px 5px 0px rgba(15, 64, 138, 1);
  }

  &.add-property-btn:hover {
    background: #0f408a;
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  color: rgba(255, 90, 61, 0.65);
  position: relative;
  &::before {
    content: "";
    width: 1px;
    height: 3rem;
    background: #ff5a3c;
    position: absolute;
    left: -12px;
  }

  .login-icon {
    font-size: 1.3rem;
    margin-right: 4px;
    color: rgba(15, 64, 138, 0.65);
  }
`;

export const LoginLink = styled(RLink)`
  text-decoration: none;
  color: rgba(255, 90, 61, 0.65);
  font-family: sans-serif;
  &:hover {
    color: #0f408a;
  }

  transition: all 0.3s ease;
`;

export const NameOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #66787d;
    object-fit: cover;
  }

  span {
    margin: 0.4rem 0.4rem 0 0.8rem;
    color: #0f408a;
    display: flex;
    align-items: center;
  }
`;

export const OptionList = styled.ul`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3.5rem;
  /* min-width: 110%; */
  width: 11rem;
  transition: all 0.3s ease-in-out;
  background: #fbfbfb;
  background: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 3px 3px 15px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 15px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 15px -4px rgba(0, 0, 0, 0.75);
  opacity: 0;
  visibility: collapse;

  li {
    list-style-type: none;
  }
`;

export const OptionLink = styled(RLink)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #424651;
  padding: 0.5rem 1rem;

  &:hover {
    color: #fff;
    background: #ff5a3c;
    transition: 0.4s ease-in-out;
  }
`;
