import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { GiHouse } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import indoorPlan from "../static/images/indoor-plan.png";

const RegisterLoginSection = styled.section`
  width: 100%;
  height: 300px;
  background: #f7f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 4rem;
`;

const ТitleLeft = styled.h1`
  font-size: 2.3rem;
  text-shadow: 1.5px 1.5px #ababb0;
  margin-bottom: 1rem;
`;

const TitleRight = styled.h1`
  text-shadow: 1.5px 1.5px #ababb0;
  margin-bottom: 1rem;
  text-align: center;
  color: #0f408a;
`;

const HomeWrapper = styled.div``;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;

  .house {
    color: #ff5a3c;
    margin-right: 8px;
  }

  .arrow {
    margin: 6px 8px 0 8px;
    color: #6b7f89;
  }
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: #6b7f89;
  &:hover {
    color: #ff5a3c;
  }
`;

const IndoorImg = styled.img`
  opacity: 0.1;
  position: relative;
  bottom: 250px;
  right: 300px;
  transform: rotateZ(30deg);
`;

const PageDesc = (props) => {
  const { titleBig, titleSm } = props.page;

  return (
    <RegisterLoginSection>
      <Wrapper>
        <ТitleLeft>{titleBig}</ТitleLeft>
        <HomeWrapper>
          <List>
            <li className="house">
              <GiHouse />
            </li>
            <li>
              <HomeLink to="/">Почетна</HomeLink>{" "}
            </li>
            <li>
              <IoIosArrowForward className="arrow" />
            </li>
            <li>{titleSm}</li>
          </List>
        </HomeWrapper>
      </Wrapper>
      <Wrapper>
        <TitleRight>
          <IndoorImg src={indoorPlan} />
        </TitleRight>
      </Wrapper>
    </RegisterLoginSection>
  );
};

PageDesc.propTypes = {
  page: PropTypes.object.isRequired,
};

export default PageDesc;
