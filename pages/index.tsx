import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeSections from "@/components/HomeSections";
import type { Metadata, NextPage } from "next";
import { NextSeo } from "next-seo";

import Head from "next/head";
import { useState } from "react";

interface Props {
  toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

export const metadata: Metadata = {
  title: {
    default: "Noot",
    template: "%s | Noot"
  },
  description:
    "Digital Solutions Provider - Our website offers a range of digital solutions for businesses seeking innovative software development, web design, and IT services",
  openGraph: {
    title: "Noot",
    description:
      "Digital Solutions Provider - Our website offers a range of digital solutions for businesses seeking innovative software development, web design, and IT services",
    url: "https://noot.ae",
    siteName: "Noot",
    images: [
      {
        url: "https://noot.ae/og.jpg",
        width: 1920,
        height: 1080
      }
    ],
    locale: "en-US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    title: "Noot",
    card: "summary_large_image"
  },
  icons: {
    shortcut: "/favicon.ico"
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71"
  }
};
const Home: NextPage<Props> = ({ toggleTheme }) => {
  const [burger, setBurger] = useState<boolean>(false);
  const openBurgerNav = () => {
    setBurger(true);
  };
  const closeBurgerNav = () => {
    setBurger(false);
  };
  return (
    <div style={{ position: "relative" }}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title="Digital Solutions Provider"
        defaultTitle="Noot | Digital Solutions Provider"
        description="Digital Solutions Provider - Our website offers a range of digital solutions for businesses seeking innovative software development, web design, and IT services"
        canonical="https://www.noot.ae/"
        openGraph={{
          url: "https://www.noot.ae/",
          title: "Noot | Digital Solutions Provider",
          description:
            "Digital Solutions Provider - Our website offers a range of digital solutions for businesses seeking innovative software development, web design, and IT services",
          images: [
            {
              url: "https://noot.ae/static/assets/img/logo.png",
              width: 800,
              height: 420,
              alt: "Noot | Digital Solutions Provider"
            }
          ]
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1
        }}
        twitter={{
          handle: "@Noot",
          site: "@Noot",
          cardType: "summary_large_image"
        }}
      />
      <Header
        toggleTheme={toggleTheme}
        openBurgerNav={openBurgerNav}
        closeBurgerNav={closeBurgerNav}
        burger={burger}
      />
      <HomeSections burger={burger} />
      <Footer burger={burger} />
    </div>
  );
};

export default Home;
