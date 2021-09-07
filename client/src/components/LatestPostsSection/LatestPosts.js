import {
  LatestPostSection,
  PostsContainerWrapper,
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
  BottomImg,
  MiddleLocation,
} from "./LatestPostElements";

// react icons
import { FiCamera } from "react-icons/fi";
import { MdSlowMotionVideo } from "react-icons/md";
import { BiBed, BiBath } from "react-icons/bi";
import { FaVectorSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

// simulation images
import pic1 from "../../static/images/img-latest1.jpg";
import noAvatar from "../../static/images/noAvatar.png";

import { Title } from "../Globals/Globals";

const LatestPosts = () => {
  return (
    <>
      <LatestPostSection id="latestPosts">
        <Title>Најново на пазарот</Title>
        <PostsContainerWrapper>
          {/*---------------- single post--------------------- */}
          <LatestPostWrapper>
            <LatestPostTop>
              <PostImg src={pic1} />
              <SaleRentSpan>продажба</SaleRentSpan>
              <NumberOfImages>
                <FiCamera className="icon" />4
              </NumberOfImages>
            </LatestPostTop>

            <LatestPostMiddle>
              <span>$1200</span>
              <PostLink>
                <h2>Нов стан на Водно</h2>
              </PostLink>
              <p className="short-desc">Lorem, ipsum dolor</p>

              <LatestPostDataWrapper>
                {/* ---- */}
                <LatestPostData>
                  <span>
                    <BiBed className="data-icon" /> 3
                  </span>
                  <p>Спална</p>
                </LatestPostData>
                {/* ---- */}

                <LatestPostData>
                  <span>
                    <BiBath className="data-icon" /> 2
                  </span>
                  <p>Купатило</p>
                </LatestPostData>
                {/* ---- */}

                <LatestPostData>
                  <span>
                    <FaVectorSquare className="data-icon" /> 130
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
              <BottomImg>
                <img src={noAvatar} alt="profilePicture" />
                <span>Методија Митовски</span>
                <span className="phone-num">тел:078-xxx-xxx</span>
                <span className="post-date">07.02.2021</span>
              </BottomImg>
            </LatestPostBottom>
          </LatestPostWrapper>
          {/* ------------------------------------------------ */}
          {/*---------------- single post--------------------- */}
          <LatestPostWrapper>
            <LatestPostTop>
              <PostImg src={pic1} />
              <SaleRentSpan>продажба</SaleRentSpan>
              <NumberOfImages>
                <FiCamera className="icon" />4
              </NumberOfImages>
            </LatestPostTop>

            <LatestPostMiddle>
              <span>$1200</span>
              <PostLink>
                <h2>Нов стан на Водно</h2>
              </PostLink>
              <p className="short-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                ex molestias accusamus odio facilis at aliquid excepturi
                tenetur?
              </p>

              <LatestPostDataWrapper>
                {/* ---- */}
                <LatestPostData>
                  <span>
                    <BiBed className="data-icon" /> 3
                  </span>
                  <p>Спална</p>
                </LatestPostData>
                {/* ---- */}

                <LatestPostData>
                  <span>
                    <BiBath className="data-icon" /> 2
                  </span>
                  <p>Купатило</p>
                </LatestPostData>
                {/* ---- */}

                <LatestPostData>
                  <span>
                    <FaVectorSquare className="data-icon" /> 130
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
              <BottomImg>
                <img src={noAvatar} alt="profilePicture" />
                <span>Методија Митовски</span>
                <span className="phone-num">тел:078-xxx-xxx</span>
                <span className="post-date">07.02.2021</span>
              </BottomImg>
            </LatestPostBottom>
          </LatestPostWrapper>
          {/* ------------------------------------------------ */}
          {/*---------------- single post--------------------- */}
          <LatestPostWrapper>
            <LatestPostTop>
              <PostImg src={pic1} />
              <SaleRentSpan>продажба</SaleRentSpan>
              <NumberOfImages>
                <FiCamera className="icon" />4
              </NumberOfImages>
            </LatestPostTop>

            <LatestPostMiddle>
              <span>$1200</span>
              <PostLink>
                <h2>Нов стан на Водно</h2>
              </PostLink>
              <p className="short-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                eum saepe velit illo corporis totam alias unde dolor ipsam sed?
              </p>

              <LatestPostDataWrapper>
                {/* ---- */}
                <LatestPostData>
                  <span>
                    <BiBed className="data-icon" /> 3
                  </span>
                  <p>Спална</p>
                </LatestPostData>
                {/* ---- */}

                <LatestPostData>
                  <span>
                    <BiBath className="data-icon" /> 2
                  </span>
                  <p>Купатило</p>
                </LatestPostData>
                {/* ---- */}

                <LatestPostData>
                  <span>
                    <FaVectorSquare className="data-icon" /> 130
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
              <BottomImg>
                <img src={noAvatar} alt="profilePicture" />
                <span>Методија Митовски</span>
                <span className="phone-num">тел:078-xxx-xxx</span>
                <span className="post-date">07.02.2021</span>
              </BottomImg>
            </LatestPostBottom>
          </LatestPostWrapper>
          {/* ------------------------------------------------ */}
        </PostsContainerWrapper>
      </LatestPostSection>
    </>
  );
};

export default LatestPosts;
