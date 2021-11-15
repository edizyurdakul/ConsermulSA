import { HomeHero, HomeAbout, HomeServices, CallToAction, Numbers, Testimonials, Gallery, FAQ } from "../components/Sections";

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <CallToAction />
      <Numbers />
      <Testimonials />
      <Gallery />
      <FAQ />
    </div>
  );
};

export default HomePage;
