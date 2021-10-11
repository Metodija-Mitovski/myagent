import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

// components
import {
  MainRightContent,
  Contact,
  ContactImg,
  ContactInfo,
  RelatedPostsWrapper,
} from "./MainRightElements";
import { InfoData } from "../mainLeft/MainLeftElements";
import RelatedPost from "./RelatedPosts";
import AddToWishList from "./AddToWishList";
import LoaderBig from "../../Loader/LoaderBig";

// img
import noAvatar from "../../../static/images/noAvatar.png";

const MainRight = ({ showModal }) => {
  const post = useSelector((state) => state.postsReducer.singlePost);
  const user = useSelector((state) => state.user);

  const { relatedPosts, isFetching, relatedPostsErrMsg } = useSelector(
    (state) => state.postsReducer
  );

  return (
    <MainRightContent>
      {user._id !== post.user._id && <AddToWishList />}

      <InfoData>
        <h3>Контакт</h3>
        <Contact>
          <ContactImg>
            <img
              src={
                post.user.profileImg.url ? post.user.profileImg.url : noAvatar
              }
              alt=""
            />
          </ContactImg>
          <ContactInfo>
            <p className="name">
              {post.user.firstName} {post.user.lastName}
            </p>
            <p className="tel">тел: {post.contactNumber}</p>
          </ContactInfo>
        </Contact>
      </InfoData>
      <RelatedPostsWrapper id="related-posts" showModal={showModal}>
        <h3>Поврзано</h3>
        {relatedPosts.length > 0 && isFetching === false ? (
          relatedPosts.map((post) => {
            return <RelatedPost post={post} key={post._id} />;
          })
        ) : isFetching ? (
          <LoaderBig />
        ) : (
          <h1>Не се пронајдени поврзани објави</h1>
        )}
      </RelatedPostsWrapper>
    </MainRightContent>
  );
};

MainRight.propTypes = {
  showModal: PropTypes.bool.isRequired,
};

export default MainRight;
