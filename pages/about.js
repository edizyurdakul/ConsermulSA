import { HomeAbout, CallToAction, FAQ, Team, CommonHero, Block, BlockReverse } from "../components/Sections";

const AboutPage = () => {
  return (
    <main>
      <section>
        <CommonHero />
      </section>
      <section>
        <Block />
      </section>
      <section>
        <BlockReverse />
      </section>
    </main>
  );
};

export default AboutPage;
