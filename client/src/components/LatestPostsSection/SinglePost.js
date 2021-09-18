import PropTypes from "prop-types";
import { format } from "timeago.js";

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

// react icons
import { FiCamera } from "react-icons/fi";
import { BiBed, BiBath } from "react-icons/bi";
import { FaVectorSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

// simulation images
import noImage from "../../static/images/no-image-available.jpg";
import noAvatar from "../../static/images/noAvatar.png";

const SinglePost = ({ data }) => {
  console.log(data);
  return (
    <LatestPostWrapper>
      <PostLink to="/post">
        <LatestPostTop>
          <PostImg
            src={data.images.length > 0 ? data.images[0].imgUrl : noImage}
          />
          <SaleRentSpan bg={data.purpose}>
            {data.purpose === "sale" ? "продажба" : "изнајмување"}
          </SaleRentSpan>
          <NumberOfImages>
            <FiCamera className="icon" />
            {data.images.length > 0 ? data.images.length : 0}
          </NumberOfImages>
        </LatestPostTop>

        <LatestPostMiddle>
          <span>{data.price ? `€${data.price}` : `договор`}</span>
          <h2>{data.title}</h2>
          <p className="short-desc">{data.shortDesc}</p>

          <LatestPostDataWrapper>
            {/* ---- */}
            <LatestPostData>
              <span>
                <BiBed className="data-icon" />
                {data.specs.bedrooms && data.specs.bedrooms}
              </span>
              <p>Спална</p>
            </LatestPostData>
            {/* ---- */}

            <LatestPostData>
              <span>
                <BiBath className="data-icon" />
                {data.specs.baths && data.specs.baths}
              </span>
              <p>Купатило</p>
            </LatestPostData>
            {/* ---- */}

            <LatestPostData>
              <span>
                <FaVectorSquare className="data-icon" />
                {data.specs.area && data.specs.area}
              </span>
              <p>м2</p>
            </LatestPostData>
            {/* ---- */}
          </LatestPostDataWrapper>

          <MiddleLocation>
            <ImLocation className="location-icon" />
            <span>локација:Скопје-АвтоКоманда</span>
          </MiddleLocation>
        </LatestPostMiddle>

        <LatestPostBottom>
          <BottomData>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={
                  data.user.profileImg.url ? data.user.profileImg.url : noAvatar
                }
                alt="profilePicture"
              />{" "}
              <span>
                {data.user.firstName} {data.user.lastName}
              </span>
            </div>

            <span className="phone-num">тел:{data.contactNumber}</span>
            <span className="post-date">{format(data.createdAt)}</span>
          </BottomData>
        </LatestPostBottom>
      </PostLink>
    </LatestPostWrapper>
  );
};

SinglePost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SinglePost;
