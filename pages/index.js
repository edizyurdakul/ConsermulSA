import { HomeHero, HomeAbout, HomeServices, CallToAction, Numbers, Testimonials, Gallery, FAQ } from "../components/Sections";

const HomePage = () => {
  return (
    <main>
      <section>
        <HomeHero />
      </section>
      <section>
        <HomeAbout />
      </section>
      <section>
        <HomeServices />
      </section>
      <section>
        <CallToAction />
      </section>
      <section>
        <Numbers />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <FAQ />
      </section>
    </main>
  );
};

export default HomePage;
