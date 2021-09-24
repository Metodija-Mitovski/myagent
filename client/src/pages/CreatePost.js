import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PageDesc from "../components/PageDesc";
import PostData from "../components/AddPost/PostData";

const CreatePost = () => {
  return (
    <>
      <NavBar />
      <PageDesc page={{ titleBig: "ПОСТ", titleSm: "нов пост" }} />
      <PostData />
      <Footer />
    </>
  );
};

export default CreatePost;
