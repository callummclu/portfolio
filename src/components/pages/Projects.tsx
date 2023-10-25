import { Anchor, Container, Flex, Text, Title } from "@mantine/core";
import { Ref } from "react";

interface ProjectsProps {
  posRef: Ref<any>;
  goBack: () => void;
}

export const Projects = ({ posRef, goBack }: ProjectsProps) => {
  return (
    <Container
      ref={posRef}
      h="100svh"
      style={{
        scrollSnapAlign: "start",
      }}
    >
      <Flex
        direction="column"
        h="100%"
        w="100%"
        align="center"
        justify="center"
      >
        <Title order={3}>Projects</Title>
        <Text>Coming Soon</Text>
        <Anchor onClick={goBack}>back</Anchor>
      </Flex>
    </Container>
  );
};
