import { ButtonWrapper } from "./ProfileDataElements";
import Loader from "../Loader/Loader";

const ProcesBtn = (props) => {
  return (
    <>
      {props.isUpdatingData ? (
        <ButtonWrapper updating={props.isUpdatingData}>
          {" "}
          {props.isFetching ? (
            <button type="submit">
              <Loader />
            </button>
          ) : (
            <button type="submit">Промени</button>
          )}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          {" "}
          <button type="submit" disabled>
            {props.deactivateAcc ? "Деактивирај" : "Промени"}
          </button>
        </ButtonWrapper>
      )}
    </>
  );
};

export default ProcesBtn;
