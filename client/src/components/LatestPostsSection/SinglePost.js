import PropTypes from "prop-types";

import {
  LatestPostWrapper,
  LatestPostTop,
  PostImg,
  SaleRentSpan,
  NumberOfImages,
  LatestPostMiddle,
  PostLink,
  LatestPostBottom,
  LatestPostDataWrapper,
  LatestPostData,
  BottomData,
  MiddleLocation,
} from "./LatestPostElements";

import { cyr_to_lat } from "../AddPost/PostDataSpecs/utils";

// react icons
import { FiCamera } from "react-icons/fi";
import { BiBed, BiBath } from "react-icons/bi";
import { FaVectorSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

// images
import noImage from "../../static/images/no-image.png";
import noAvatar from "../../static/images/noAvatar.png";

const SinglePost = ({ post }) => {
  return (
    <LatestPostWrapper>
      <PostLink to={`/posts/${post._id}`}>
        <LatestPostTop>
          <PostImg
            src={post.images.length > 0 ? post.images[0].imgUrl : noImage}
          />
          <SaleRentSpan bg={post.purpose === "sale" ? "#ff5a3c" : "#0f408a"}>
            {post.purpose === "sale" ? "продажба" : "изнајмување"}
          </SaleRentSpan>
          <NumberOfImages>
            <FiCamera className="icon" />
            {post.images.length > 0 ? post.images.length : 0}
          </NumberOfImages>
        </LatestPostTop>

        <LatestPostMiddle>
          <span>{post.price ? `€${post.price}` : `договор`}</span>
          <h2>{post.title}</h2>

          <LatestPostDataWrapper>
            <LatestPostData>
              <span>
                <BiBed className="data-icon" />
                {post.specs && post.specs.bedrooms}
              </span>
              <p>Спална</p>
            </LatestPostData>

            <LatestPostData>
              <span>
                <BiBath className="data-icon" />
                {post.specs && post.specs.baths}
              </span>
              <p>Купатило</p>
            </LatestPostData>

            <LatestPostData>
              <span>
                <FaVectorSquare className="data-icon" />
                {post.specs && post.specs.area}
              </span>
              <p>м2</p>
            </LatestPostData>
          </LatestPostDataWrapper>

          <MiddleLocation>
            <ImLocation className="location-icon" />
            <span>
              локација:{cyr_to_lat(post.location.city)}
              &nbsp;
              {post.location.settlement && post.location.settlement}
            </span>
          </MiddleLocation>
        </LatestPostMiddle>

        <LatestPostBottom>
          <BottomData>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={
                  post.user.profileImg.url ? post.user.profileImg.url : noAvatar
                }
                alt="profilePicture"
              />{" "}
              <span>
                {post.user.firstName} {post.user.lastName}
              </span>
            </div>

            <span className="phone-num">тел:{post.contactNumber}</span>
            <span className="post-date">{post.updatedAt.substring(0, 10)}</span>
          </BottomData>
        </LatestPostBottom>
      </PostLink>
    </LatestPostWrapper>
  );
};

SinglePost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default SinglePost;
