import Head from "next/head";
import { HomeHero, HomeAbout, HomeServices, CallToAction, Numbers, Testimonials, Gallery, FAQ } from "../components/Sections";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Consermul SA | </title>
        <meta name="description" content="Description" />

        <meta property="og:title" content="Social Title" />
        <meta property="og:type" content="Social Type" />
        <meta property="og:url" content="Social Url" />
        <meta property="og:image" content="Social Img" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-192x192.png" type="image/svg+xml" />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />

        <link rel="manifest" href="site.webmanifest" />
        <meta name="theme-color" content="#fff" />
      </Head>
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
    </>
  );
};

export default HomePage;
