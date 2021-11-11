import "../styles/global.scss";
import head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
