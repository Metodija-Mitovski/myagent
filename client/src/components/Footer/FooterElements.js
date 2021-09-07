import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled.footer`
  width: 100%;
  height: 7rem;
  background: #1158a6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-right: 2rem;
  -webkit-box-shadow: -1px -2px 3px -1px rgba(48, 48, 48, 1);
  -moz-box-shadow: -1px -2px 3px -1px rgba(48, 48, 48, 1);
  box-shadow: -1px -2px 3px -1px rgba(48, 48, 48, 1);
`;
export const FooterLogoWrapper = styled.div`
  width: 150px;
  height: 60px;
  display: flex;

  flex-direction: column;
  align-items: center;

  h5 {
    color: #fff;
    margin-top: 5px;
    color: #e8e8e8;
  }
`;

export const FooterLogo = styled.img`
  width: 60px;
  height: 50px;
  border-radius: 2px;
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #e8e8e8;
  }

  span {
    display: flex;
    align-items: center;
    color: #bfbfbf;
    font-size: 13px;
    padding: 2px 0;
  }

  .contact-icon {
    margin-right: 4px;
  }
`;

export const CopyRight = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -25%);
  color: #bfbfbf;
`;

export const FooterLinksWrapper = styled.div`
  margin-right: 1rem;
`;

export const SocialLink = styled(Link)`
  text-decoration: none;
  color: #ff5a3c;
  font-size: 1.5rem;
  margin-right: 6px;
`;

export const TermsConditionsLink = styled(Link)`
  text-decoration: none;
  color: #bfbfbf;
`;
