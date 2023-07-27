import { NextSeo } from "next-seo";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Tanvi Sidhwani's Portfolio"
        description="The personal portfolio website for Tanvi Sidhwani, full stack web and mobile developer, but most of all an avid learner."
        openGraph={{
          type: "website",
          locale: "en_GB",
          url: "",
          description:
            "The personal portfolio website for Tanvi Sidhwani, full stack web and mobile developer, but most of all an avid learner.",
          site_name: "Tanvi Sidhwani",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
