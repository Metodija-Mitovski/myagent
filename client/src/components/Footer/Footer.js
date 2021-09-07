import {
  FooterSection,
  FooterLogoWrapper,
  FooterLinksWrapper,
  FooterLogo,
  FooterContact,
  CopyRight,
  SocialLink,
  TermsConditionsLink,
} from "./FooterElements";

import logo from "../../static/images/logo.png";

import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <FooterSection>
      <FooterLogoWrapper>
        <FooterLogo src={logo} />
        <h5>МојАгент</h5>
      </FooterLogoWrapper>
      <FooterContact>
        <p>Контакт:</p>
        <span>
          <BiPhoneCall className="contact-icon" />
          087-xxx-xxx
        </span>
        <span>
          <FiMail className="contact-icon" />
          mail@hotmail.com
        </span>
      </FooterContact>
      <CopyRight>
        <p> &copy; 2021 МојАгент </p>
      </CopyRight>
      <FooterLinksWrapper>
        <SocialLink>
          <FaFacebookSquare />
        </SocialLink>

        <SocialLink>
          <FaInstagram />
        </SocialLink>

        <SocialLink>
          <FaLinkedin />
        </SocialLink>
        <br />
        <TermsConditionsLink>правила и услови</TermsConditionsLink>
      </FooterLinksWrapper>
    </FooterSection>
  );
};

export default Footer;
