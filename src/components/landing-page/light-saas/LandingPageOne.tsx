import HeroSection from "./Hero";
import SecondSection from "./Second-Section";
import ThirdSection from "./Third-Section";
import FourthSection from "./Fourth-Section";
import FifthSection from "./Fifth-Section";
import SixthSection from "./Sixth-Section";
import SeventhSection from "./Seventh-Section";
import GetStartedFree from "./Eighth-Section";
import Footer from "./Footer";
import Navbar from "../Navbar/navbar";

const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />

      <SixthSection />
      <SeventhSection />
      <GetStartedFree />
      <Footer />
    </div>
  );
};

export default LandingPage;
