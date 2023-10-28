import { Box, Card, Flex, Text, Title } from "@mantine/core";
import styles from "@/styles/Home.module.css";

export const Banner = () => {
  return (
    <Flex
      style={{ scrollSnapAlign: "start" }}
      h="100vh"
      align="center"
      justify="center"
    >
      <Title className={`${styles.title}`} fw={600}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m Callum
        <br /> A Full Stack Engineer
      </Title>
    </Flex>
  );
};
