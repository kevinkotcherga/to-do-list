import Navbar from "../components/Navbar/Navbar";

import PreFooter from "../components/PreFooter.tsx/PreFooter";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Introduction />
      <PreFooter />
      <Footer />
    </>
  );
}

export default LandingPage;
