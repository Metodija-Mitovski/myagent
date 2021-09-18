import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const OurGoalsSection = styled.section`
  margin-top: 5rem;
  padding-bottom: 4rem;
`;

export const OurGolasMain = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const GoalWrapper = styled.div`
  width: 400px;
  background: #fff;
  padding: 1rem;
  text-align: center;
  position: relative;
  border-radius: 4px;
  -webkit-box-shadow: 1px -1px 10px -1px rgba(109, 109, 122, 1);
  -moz-box-shadow: 1px -1px 10px -1px rgba(109, 109, 122, 1);
  box-shadow: 1px -1px 10px -1px rgba(109, 109, 122, 1);
  transition: all 0.4s ease;

  &::after {
    content: "";
    width: 0;
    height: 2px;
    background: #ff5a3c;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const GoalImg = styled.img`
  width: 100%;
  height: 200px;
  padding: 0 1rem;
`;

export const GoalTitle = styled.h3`
  margin-bottom: 8px;
  color: #6b7f89;
`;

export const GoalDesc = styled.p`
  font-size: 13px;
  font-weight: 100;
  padding: 0.7rem 1rem;
  color: #6b7f89;
`;

export const GoalLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #ff5a3c;
  padding: 1rem 0;
`;
