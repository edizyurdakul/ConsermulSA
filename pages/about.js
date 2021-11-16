import { HomeAbout, CallToAction, Team, CommonHero, Block, BlockReverse } from "../components/Sections";

const AboutPage = () => {
  return (
    <main>
      <section>
        <CommonHero />
      </section>
      <section>
        <HomeAbout />
      </section>
      <section>
        <Block />
      </section>
      <section>
        <BlockReverse />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <CallToAction />
      </section>
    </main>
  );
};

export default AboutPage;
