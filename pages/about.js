import { HomeAbout, CallToAction, Team, CommonHero, Block, BlockReverse } from "../components/Sections";

const AboutPage = () => {
  return (
    <main>
      <section>
        <CommonHero
          title="About"
          paragraph="ConsermulSA has extensive experience in the development of infrastructure works, 
            porcelain tile installations, stoneware finishes, painting and finishes in general, civil works and electrical installations."
          calltoaction="Contact"
        />
      </section>
      <section>
        <HomeAbout />
      </section>
      <section>
        <Block
          title="Title"
          paragraph="Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
            attention to the tone of voice. Try to win the customers' trust by being positive"
        />
        <BlockReverse
          title="Title"
          paragraph="Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
            attention to the tone of voice. Try to win the customers' trust by being positive"
        />
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
