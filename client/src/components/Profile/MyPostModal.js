import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { deletePostRequest } from "../../state/action-creators/post-actions";

//components
import { ModalWrapper, DeleteBtn, CloseModal } from "./MyPostElements";
import LoadSpinner from "../Loader/Loader";

//icons
import { BiCheckDouble } from "react-icons/bi";

const MyPostModal = ({ setModal, postId }) => {
  const dispatch = useDispatch();

  const { isFetching, errorMsg } = useSelector((state) => state.postsReducer);

  return (
    <ModalWrapper>
      <CloseModal onClick={() => setModal(false)}>X</CloseModal>
      <p>Потврди за бришење на постот</p>
      <DeleteBtn
        onClick={() => {
          dispatch(deletePostRequest(postId));
        }}
      >
        {isFetching ? (
          <LoadSpinner />
        ) : (
          <BiCheckDouble className="check-icon" />
        )}
      </DeleteBtn>
      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
    </ModalWrapper>
  );
};

MyPostModal.propTypes = {
  setModal: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

export default MyPostModal;
