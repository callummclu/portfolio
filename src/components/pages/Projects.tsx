import {
  Image,
  Anchor,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Title,
  ActionIcon,
} from "@mantine/core";
import { Ref } from "react";
import { SiGithub } from "react-icons/si";

interface ProjectsProps {
  posRef: Ref<any>;
  goBack: () => void;
}

export const Projects = ({ posRef, goBack }: ProjectsProps) => {
  const projects = [
    {
      logo: "/pictoclone-logo.png",
      name: "Picto Clone",
      short_description:
        "A remake of an old nintendo DS p2p messaging application built with web sockets and react",
      link: "https://github.com/callummclu/picto-clone",
    },
    {
      logo: "/espruinotools-logo.svg",
      name: "Espruino tools",
      short_description:
        "Espruino tools are a set of node packages built with the aim to make development on espruino devices as easy as possible",
      link: "https://github.com/espruino-tools",
    },
  ];
  return (
    <Container
      ref={posRef}
      h="100vh"
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
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={"7.5vw"}>
          {projects.map((project) => (
            <Stack key={project.name} mb={50} align="center" gap={0}>
              <Flex justify="center" align="center" h={170}>
                <Image
                  mb={20}
                  w={150}
                  src={project.logo}
                  alt={project.name + " logo"}
                />
              </Flex>
              <Title order={3} pos="relative">
                {project.name}{" "}
                <Anchor pos="absolute" right={-30} top={1} variant="light">
                  <ActionIcon
                    variant="transparent"
                    color="dark"
                    aria-label="github"
                  >
                    <SiGithub />
                  </ActionIcon>
                </Anchor>
              </Title>
              <Text ta="center">{project.short_description}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};
