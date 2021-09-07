import Login from "../components/Register-Login/Login";
import NavBar from "../components/Navbar/Navbar";
import PageDesc from "../components/PageDesc";
import Footer from "../components/Footer/Footer";

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <PageDesc page={{ titleBig: "ПРОФИЛ", titleSm: "најава" }} />
      <Login />
      <Footer />
    </>
  );
};

export default LoginPage;
