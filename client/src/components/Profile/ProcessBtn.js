import { useSelector } from "react-redux";
import { ButtonWrapper } from "./ProfileDataElements";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";

const ProcesBtn = ({ updateUserData }) => {
  const user = useSelector((state) => state.user);
  const isFetching = useSelector((state) => state.user.isFetching);
  const { firstName, lastName, email } = updateUserData;

  return (
    <>
      {isFetching ? (
        <ButtonWrapper>
          <button>
            <Loader />
          </button>
        </ButtonWrapper>
      ) : firstName === user.firstName &&
        lastName === user.lastName &&
        email === user.email ? (
        <ButtonWrapper>
          <button disabled>Промени</button>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper updating={true}>
          <button>Промени</button>
        </ButtonWrapper>
      )}
    </>
  );
};

ProcesBtn.propTypes = {
  updateUserData: PropTypes.object.isRequired,
};

export default ProcesBtn;
