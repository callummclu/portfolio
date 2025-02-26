import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Banner } from "@/components/pages/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Callum McLuskey</title>
        <meta
          name="description"
          content="Callum McLuskey - Software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div dir="ltr" className={`${styles.main} ${inter.className}`}>
        <Banner />
      </div>
    </>
  );
}
