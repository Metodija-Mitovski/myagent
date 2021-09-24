import styled from "styled-components";

export const MainLeftContent = styled.main`
  min-width: 65%;
  max-width: 65%;
`;

export const ImagesWrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export const ImagesSlider = styled.div`
  width: 100%;
  height: ${(props) => (props.modal ? "38rem" : "33rem")};
  display: flex;
  transition: all 0.6s ease-in-out;

  img {
    min-width: 100%;
    min-height: 100%;
  }
`;

export const SlideBtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const SlideBtn = styled.button`
  padding: 0.4rem 0.6rem;
  border: none;
  cursor: pointer;
  color: #fff;
  background: #ff5a3c;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #e63819;
  }

  .slide-icon {
    font-size: 2rem;
    pointer-events: none;
  }
`;

export const InfoData = styled.div`
  h3 {
    color: #46474a;
    font-size: 24px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e7e7e7;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  p {
    word-wrap: break-word;
    color: #8f8f8f;
    font-size: 14px;
  }
`;

export const Table = styled.table`
  width: 100%;
  color: #46474a;
  border-collapse: collapse;
  font-size: 14px;
  text-transform: capitalize;

  td {
    padding: 0.8rem 1.8rem;
  }

  tr:nth-child(odd) {
    background: #f7f7f7;
  }

  tr td:nth-child(1) {
    width: 40%;
  }
  tr td:nth-child(2) {
    width: 60%;
  }
`;

/////// modal

export const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 40rem;
  background: #000;
  color: #fff;
  padding: 1rem;
`;

export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 1.5rem;
    font-size: 1.2rem;
    color: #bfbfbf;
    border: none;
    cursor: pointer;
    background: #000;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    color: #fff;
  }
`;

export const ModalMiddleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 95%;
`;

export const ModalArrLeft = styled.div`
  min-width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .slideModalLeft {
    font-size: 4rem;
    color: #bfbfbf;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .slideModalLeft:hover {
    color: #fff;
  }
`;
export const ModalArrRight = styled.div`
  min-width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .slideModalRight {
    font-size: 4rem;
    color: #bfbfbf;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .slideModalRight:hover {
    color: #fff;
  }
`;

export const ModalSlideBtn = styled.button`
  background: #000;
  border: none;
`;

export const ModalImagesWrapper = styled.div`
  min-width: 70%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
