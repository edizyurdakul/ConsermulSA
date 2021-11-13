import { Header } from "../components/Header";
import { HomeHero, HomeAbout, HomeServices, CallToAction, Numbers, Testimonials } from "../components/Sections";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <CallToAction />
      <Numbers />
      <Testimonials />
      <h1>Hello World</h1>
      <br />
    </div>
  );
};

export default HomePage;
