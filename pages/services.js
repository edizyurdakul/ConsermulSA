import { HomeServices, CallToAction, CommonHero, FAQ, Block, BlockReverse, HomeAbout } from "../components/Sections";

const ServicesPage = () => {
  return (
    <main>
      <section>
        <CommonHero
          title="Services"
          paragraph="Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
              attention to the tone of voice. Try to win the customers' trust by being positive"
          calltoaction="Get a Quote"
        />
      </section>
      <section>
        <HomeServices />
      </section>
      <section>
        <Block
          title="Service"
          paragraph="Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
              attention to the tone of voice. Try to win the customers' trust by being positive"
        />
        <BlockReverse
          title="Service"
          paragraph="Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
              attention to the tone of voice. Try to win the customers' trust by being positive"
        />
      </section>
      <section>
        <CallToAction />
      </section>
      <section>
        <FAQ />
      </section>
    </main>
  );
};

export default ServicesPage;
