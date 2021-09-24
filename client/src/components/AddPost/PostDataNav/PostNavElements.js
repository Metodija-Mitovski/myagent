import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: #0f408a;
  text-shadow: 1px 1px #ababb0;
  margin-bottom: 4rem;
`;

export const Specs = styled.div`
  margin-right: 2rem;
  cursor: pointer;
`;

export const Images = styled.div`
  cursor: pointer;
`;

export const UnderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10px;

  .underLeft {
    width: 45%;
    height: 1.5px;
    background: #ff5a3c;
    margin-right: 3px;
  }

  .underMiddle {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ff5a3c;
  }

  .underRight {
    width: 45%;
    height: 1.5px;
    background: #ff5a3c;
    margin-left: 3px;
  }
`;
