//components
import Register from "../components/Register-Login/Register";
import NavBar from "../components/Navbar/Navbar";
import PageDesc from "../components/PageDesc";
import Footer from "../components/Footer/Footer";

const RegisterPage = () => {
  return (
    <>
      <NavBar />
      <PageDesc page={{ titleBig: "ПРОФИЛ", titleSm: "регистрација" }} />
      <Register />
      <Footer />
    </>
  );
};

export default RegisterPage;
