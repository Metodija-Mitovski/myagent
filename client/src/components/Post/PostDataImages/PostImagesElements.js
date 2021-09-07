import styled from "styled-components";
import { FiUpload } from "react-icons/fi";

export const ImagesSection = styled.section`
  margin-top: 4rem;
  position: relative;
`;

export const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 15rem;
  justify-content: center;
  border: 2px solid #e6f2ff;
  padding: 1rem;
  margin-left: 5rem;

  label {
    display: flex;
    cursor: pointer;
  }

  span {
    color: #0f408a;
  }
`;

export const UploadIcon = styled(FiUpload)`
  font-size: 1.3rem;
  color: #ff5a3c;
  margin-right: 8px;
`;

export const ImagesMain = styled.main`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-column-gap: 5rem;
  grid-row-gap: 3rem;
  justify-content: center;
`;

export const ImgWrapper = styled.div`
  height: 250px;
  border: 2px solid #cce5ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 4px;
  background: #f6f6f6;
  padding: 0.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RemFromUpload = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: red;
  cursor: pointer;
  border: none;
  width: 1rem;
  height: 1rem;
  color: #fff;
  border-radius: 50%;
  font-size: 11px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding-left: 8.5rem;
`;
