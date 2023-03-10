import type { NextPage } from "next";

import Head from "next/head";
import LandingPage from "./landingPage/landingPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Asten College</title>
        <meta name="description" content={"Asten College"} />
      </Head>
      <LandingPage />
    </>
  );
};

export default Home;
