// components
import {
  PostLink,
  Post,
  ImagesWrapper,
  TitlePriceWrapper,
  ButtonWrapper,
  PostButton,
} from "./MyPostElements";
import MyPostModal from "./MyPostModal";

// no image
import noImage from "../../static/images/no-image.png";

const MyPost = ({
  id,
  image,
  title,
  price,
  modal,
  modalElementId,
  openModal,
  setModal,
}) => {
  return (
    <Post>
      {modal && id === modalElementId && (
        <MyPostModal setModal={setModal} postId={id} />
      )}
      <PostLink to={`/posts/${id}`}>
        <ImagesWrapper>
          <img src={image ? image.imgUrl : noImage} alt="" />
        </ImagesWrapper>
        <TitlePriceWrapper>
          <p className="title">{title}</p>
          <p className="price">{price ? `€${price}` : "договор"}</p>
        </TitlePriceWrapper>
      </PostLink>
      <ButtonWrapper>
        <PostButton edit={true} onClick={() => {}}>
          едитирај
        </PostButton>

        <PostButton edit={false} onClick={() => openModal(id)}>
          избриши
        </PostButton>
      </ButtonWrapper>
    </Post>
  );
};

export default MyPost;
