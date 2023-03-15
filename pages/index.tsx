import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeSections from "@/components/HomeSections";
import type { NextPage } from "next";

import Head from "next/head";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

const Home: NextPage<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Noot</title>
        <meta name="description" content={"Noot"} />
      </Head>
      <Header toggleTheme={toggleTheme} />
      <HomeSections />
      <Footer />
    </>
  );
};

export default Home;
