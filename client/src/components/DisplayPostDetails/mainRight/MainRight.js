import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

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
  const { postData } = useSelector((state) => state.singlePost);
  const user = useSelector((state) => state.user);

  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isFetchingRelated, setIsFetchingRelated] = useState(true);

  useEffect(() => {
    const getRelatedPosts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/posts/related?location=${postData.location.city}&realEstateType=${postData.realEstateType}&purpose=${postData.purpose}&id=${postData._id}`
        );

        if (res.status === 200) {
          setRelatedPosts(res.data);
          setIsFetchingRelated(false);
          return;
        }

        throw new Error();
      } catch (error) {
        setRelatedPosts([]);
        setIsFetchingRelated(false);
      }
    };
    getRelatedPosts();
  }, [postData]);

  return (
    <MainRightContent>
      {user._id !== postData.user._id && <AddToWishList />}

      <InfoData>
        <h3>Контакт</h3>
        <Contact>
          <ContactImg>
            <img
              src={
                postData.user.profileImg.url
                  ? postData.user.profileImg.url
                  : noAvatar
              }
              alt=""
            />
          </ContactImg>
          <ContactInfo>
            <p className="name">
              {postData.user.firstName} {postData.user.lastName}
            </p>
            <p className="tel">тел: {postData.contactNumber}</p>
          </ContactInfo>
        </Contact>
      </InfoData>
      <RelatedPostsWrapper id="related-posts" showModal={showModal}>
        <h3>Поврзано</h3>
        {relatedPosts.length > 0 && isFetchingRelated === false ? (
          relatedPosts.map((post) => {
            return <RelatedPost post={post} key={post._id} />;
          })
        ) : isFetchingRelated ? (
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
