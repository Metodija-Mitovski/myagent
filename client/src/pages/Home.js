//components
import NavBar from "../components/Navbar/Navbar";
import QuerySection from "../components/QuerySection/QuerySection";
import LatestPosts from "../components/LatestPostsSection/LatestPosts";
import OurGoals from "../components/OurGoalsSection/OurGoals";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <NavBar home={true} />
      <QuerySection />
      <LatestPosts />
      <OurGoals />
      <Footer />
    </>
  );
};

export default HomePage;
