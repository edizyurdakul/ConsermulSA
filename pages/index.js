import { Header } from "../components/Header";
import { HomeHero, HomeAbout, HomeServices, HomeCallToAction } from "../components/Sections";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeCallToAction />
      <h1>Hello World</h1>
      <br />
    </div>
  );
};

export default HomePage;
