import { Title } from "../Globals/Globals";

import {
  OurGolasMain,
  OurGoalsSection,
  GoalWrapper,
  GoalImg,
  GoalTitle,
  GoalDesc,
  GoalLink,
} from "./OurGolasElements";

import svg1 from "../../static/images/svg1.svg";
import svg2 from "../../static/images/svg2.svg";
import svg3 from "../../static/images/svg3.svg";
import { BsArrowRight } from "react-icons/bs";

const OurGoals = () => {
  return (
    <>
      <OurGoalsSection id="ourGoals">
        <Title>Наша Цел</Title>
        <OurGolasMain>
          {/* single goal */}
          <GoalWrapper>
            <GoalImg src={svg1} />
            <GoalTitle>Купете дом</GoalTitle>
            <GoalDesc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              quia blanditiis harum aperiam nesciunt fugit tempore maiores
              distinctio tenetur nulla.
            </GoalDesc>
            <GoalLink>
              Најди Дом
              <BsArrowRight />
            </GoalLink>
          </GoalWrapper>
          {/* ----- */}
          {/* single goal */}
          <GoalWrapper>
            <GoalImg src={svg2} />
            <GoalTitle>Изнајмете недвижност</GoalTitle>
            <GoalDesc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              quia blanditiis harum aperiam nesciunt fugit tempore maiores
              distinctio tenetur nulla.
            </GoalDesc>
            <GoalLink>
              Најди Дом
              <BsArrowRight />
            </GoalLink>
          </GoalWrapper>
          {/* ----- */}
          {/* single goal */}
          <GoalWrapper>
            <GoalImg src={svg3} />
            <GoalTitle>Продадете недвижност</GoalTitle>
            <GoalDesc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              quia blanditiis harum aperiam nesciunt fugit tempore maiores
              distinctio tenetur nulla.
            </GoalDesc>
            <GoalLink>
              Најди Дом
              <BsArrowRight />
            </GoalLink>
          </GoalWrapper>
          {/* ----- */}
        </OurGolasMain>
      </OurGoalsSection>
    </>
  );
};

export default OurGoals;
