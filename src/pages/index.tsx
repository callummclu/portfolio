import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Center, Container, Flex, Text, Title, rem } from "@mantine/core";

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
      <main className={`${styles.main} ${inter.className}`}>
        <Flex h="100svh" align="center" justify="center">
          <Title className={`${styles.title}`} fw={600}>
            👋 I&apos;m Callum
            <br /> A Full Stack Engineer
          </Title>
        </Flex>
        <Flex h="100svh" align="center" justify="center">
          <Text>Content coming soon 😔 </Text>
        </Flex>
      </main>
    </>
  );
}
