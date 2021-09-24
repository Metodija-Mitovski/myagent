import NavBar from "../components/Navbar/Navbar";
import PageDesc from "../components/PageDesc";
import DisplayPostDetails from "../components/DisplayPostDetails/DisplayPostDetails";
import Footer from "../components/Footer/Footer";

const PostDetails = () => {
  return (
    <>
      <NavBar />
      <PageDesc
        page={{ titleBig: "ДЕТАЛИ", titleSm: "детали за недвижност" }}
      />
      <DisplayPostDetails />
      <Footer />
    </>
  );
};

export default PostDetails;
