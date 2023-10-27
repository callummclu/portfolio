import { Anchor, Container, Flex, Image, Text, Title } from "@mantine/core";
import { Ref } from "react";

interface AboutProps {
  posRef: Ref<any>;
  goBack: () => void;
}

export const About = ({ posRef, goBack }: AboutProps) => {
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
        <Image w={200} mb={20} src="/University-of-Glasgow.png" />
        <Title order={3}>BSc Honours in Computing Science</Title>
        <Text>with Honours of the Second Class (Division i)</Text>
        <Text>with Specialism in Human Computer Interaction</Text>
      </Flex>
    </Container>
  );
};
