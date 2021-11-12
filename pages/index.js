import { Header } from "../components/Header";
import { HomeHero, HomeAbout, HomeServices } from "../components/Sections";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <h1>Hello World</h1>
      <br />
    </div>
  );
};

export default HomePage;
