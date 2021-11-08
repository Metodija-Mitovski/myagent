import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PageDesc from "../components/PageDesc";
import PostData from "../components/AddPost/PostData";

const EditPost = () => {
  return (
    <>
      <NavBar />
      <PageDesc
        page={{
          titleBig: "ПОСТ",
          titleSm: "едитирај пост",
        }}
      />
      <PostData />
      <Footer />
    </>
  );
};

export default EditPost;
