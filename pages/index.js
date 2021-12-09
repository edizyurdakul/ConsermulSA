import Head from "next/head";
import { HomeHero, HomeAbout, HomeServices, CallToAction, Numbers, Testimonials, Gallery, FAQ } from "../components/Sections";

const HomePage = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Consermul SA | Es Una Empresa de Consultoria, Mantenimiento y Construcción </title>
        <meta name="description" content="Empresa de Consultoria, Mantenimiento y Construcción" />
        <meta property="og:title" content="Consermul SA" />
        <meta property="og:description" content="Es Una Empresa de Consultoria, Mantenimiento y Construcción" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.consermulsa.com/" />
        <meta property="og:image" content="Logo.png" />

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
