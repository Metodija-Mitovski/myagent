import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PageDesc from "../components/PageDesc";
import Search from "../components/PostSearch/Search";

const PostSearch = () => {
  return (
    <>
      <NavBar />
      <PageDesc
        page={{
          titleBig: "ПРЕБАРУВАЊЕ",
          titleSm: "пребарување",
        }}
      />
      <Search />
      <Footer />
    </>
  );
};

export default PostSearch;
