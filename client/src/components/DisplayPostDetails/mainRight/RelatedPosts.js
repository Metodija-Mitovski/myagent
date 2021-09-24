import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import PropTypes from "prop-types";

//components
import { SingleRelatedPost } from "./MainRightElements";

// no img
import noImage from "../../../static/images/no-image.png";

const RelatedPost = ({ post }) => {
  return (
    <SingleRelatedPost>
      <Link
        to={`/posts/${post._id}`}
        style={{ textDecoration: "none", width: "100%", height: "100" }}
        onClick={() => {
          scroll.scrollTo(300);
        }}
      >
        <img
          src={post.images.length > 0 ? post.images[0].imgUrl : noImage}
          alt=""
          style={{ border: "1px solid #e7e7e7" }}
        />
        <h4>{post.title} </h4>
        <span>{post.price ? `€${post.price}` : "договор"}</span>
      </Link>
    </SingleRelatedPost>
  );
};

RelatedPost.propTypes = {
  post: PropTypes.object.isRequired,
};

export default RelatedPost;
