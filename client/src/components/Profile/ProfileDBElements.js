import styled from "styled-components";

//icons

export const DashBoardSection = styled.section`
  display: flex;
  -webkit-box-shadow: 1px -1px 9px -4px rgba(62, 66, 117, 1);
  -moz-box-shadow: 1px -1px 9px -4px rgba(62, 66, 117, 1);
  box-shadow: 1px -1px 9px -4px rgba(62, 66, 117, 1);
  padding: 4rem 0 5rem 0;
  background: #fff;
  position: relative;
`;

export const MainLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
`;

export const MainRight = styled.div`
  flex: 2;
  margin: 3rem 0 0 4rem;
`;

export const ListWrapper = styled.div``;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  border: 1px solid #dfe5e7;
  width: 20rem;
  padding: 1.2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #66787d;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    background: #1b2840;
    color: #fff;
  }

  .icon {
    font-size: 18px;
  }

  &:hover {
    color: #ff5a3c;
  }
`;
