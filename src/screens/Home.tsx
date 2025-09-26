import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import RatingSection from "../components/RatingSection";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RatingSection />
      <ContactSection />
    </>
  );
};

export default Home;
