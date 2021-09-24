import styled from "styled-components";

export const MainRightContent = styled.main`
  min-width: 30%;
  max-width: 30%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 1.1rem;
  color: #fff;
  border: none;
  margin-bottom: 1rem;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => props.bg};
  font-weight: bold;
  transition: all 0.15s ease-in-out;

  &:hover {
    background: ${(props) => props.hoverBg};
  }
`;

export const Contact = styled.div`
  display: flex;
  width: 100%;
`;

export const ContactImg = styled.div`
  min-width: 40%;
  height: 100px;
  margin-right: 5%;
  border: 1px solid #e7e7e7;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const ContactInfo = styled.div`
  min-width: 55%;

  .name {
    font-weight: bold;
    color: #46474a;
    font-size: 1.2rem;
    font-weight: 800;
    word-wrap: break-word;
    margin-bottom: 1rem;
  }

  .tel {
    color: #ff5a3c;
  }
`;

export const RelatedPostsWrapper = styled.div`
  width: 100%;

  h3 {
    color: #46474a;
    font-size: 24px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e7e7e7;
    margin-top: ${(props) => (props.showModal ? "275px" : "6rem")};
    margin-bottom: 2rem;
  }
`;

export const SingleRelatedPost = styled.div`
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: 15rem;
  }

  h4 {
    font-size: 1.2rem;
    margin-top: 5px;
    color: #ff5a3c;
  }

  span {
    color: #46474a;
    font-weight: bold;
  }
`;
