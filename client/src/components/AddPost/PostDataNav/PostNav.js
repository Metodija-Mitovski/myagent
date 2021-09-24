import { NavWrapper, Specs, Images, UnderWrapper } from "./PostNavElements";
import PropTypes from "prop-types";

const PostNav = ({ setPostSpecs, postSpecs }) => {
  return (
    <NavWrapper>
      <Specs
        onClick={() => {
          setPostSpecs(true);
        }}
      >
        1. Детали
        {postSpecs && (
          <UnderWrapper>
            <div className="underLeft"></div>
            <div className="underMiddle"></div>
            <div className="underRight"></div>
          </UnderWrapper>
        )}
      </Specs>

      <Images
        onClick={() => {
          setPostSpecs(false);
        }}
      >
        2. Слики
        {!postSpecs && (
          <UnderWrapper>
            <div className="underLeft"></div>
            <div className="underMiddle"></div>
            <div className="underRight"></div>
          </UnderWrapper>
        )}
      </Images>
    </NavWrapper>
  );
};

PostNav.propTypes = {
  setPostSpecs: PropTypes.func.isRequired,
  postSpecs: PropTypes.bool.isRequired,
};

export default PostNav;
