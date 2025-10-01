import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
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
      <FooterSection />
    </>
  );
};

export default Home;
