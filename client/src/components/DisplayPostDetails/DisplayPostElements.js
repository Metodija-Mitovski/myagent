import styled from "styled-components";

export const DisplayPostSection = styled.section`
  width: 100%;
  min-height: 300px;
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 3.5rem 0 5rem 0;
  position: relative;
`;

export const ContentWrapper = styled.div`
  width: 75%;
`;

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MapWrapper = styled.div`
  width: 100%;
  background: #f7f7f7;
  height: 37rem;
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    color: rgba(70, 71, 74, 0.4);
  }
`;
