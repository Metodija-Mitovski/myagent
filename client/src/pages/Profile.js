import NavBar from "../components/Navbar/Navbar";
import PageDesc from "../components/PageDesc";
import Footer from "../components/Footer/Footer";
import ProfileDashboard from "../components/Profile/ProfileDashboard";

const ProfilePage = () => {
  return (
    <>
      <NavBar />
      <PageDesc page={{ titleBig: "ПРОФИЛ", titleSm: "контролна табла" }} />
      <ProfileDashboard />
      <Footer />
    </>
  );
};

export default ProfilePage;
