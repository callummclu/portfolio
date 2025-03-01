import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Banner } from "@/components/Banner";
import { useViewportSize } from "@mantine/hooks";
import { Flex } from "@mantine/core";
import { Experience } from "@/components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { width } = useViewportSize();

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
        <Flex
          mih={"100vh"}
          align="center"
          justify="center"
          px="xl"
          wrap="wrap"
          gap={width > 669 ? 75 : 0}
        >
          <Banner />
          <Experience />
        </Flex>
      </div>
    </>
  );
}
