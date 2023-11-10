import {
  Anchor,
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Ref } from "react";

interface ExperienceProps {
  posRef: Ref<any>;
  goBack: () => void;
}

export const Experience = ({ posRef, goBack }: ExperienceProps) => {
  const experience = [
    {
      logo: "/evata-logo.png",
      name: "Evata",
      title: "Intern Full Stack Engineer",
      period: {
        from: "Mar 22",
        to: "Jun 22",
      },
    },
    {
      logo: "/guitarguitar-logo.png",
      name: "guitarguitar",
      title: "Software Engineer",
      period: {
        from: "Jun 22",
        to:"Present",//to: "Feb 24",
      },
    },
//    {
//      logo: "/jpmorgan-logo.png",
//      name: "JP Morgan Chase",
//      title: "Software Engineer",
//      period: {
//        from: "Feb 24",
//        to: "Present",
//      },
//    },
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
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={"7.5vw"}>
          {experience.map((job) => (
            <Stack key={job.title + job.name} mb={50} align="center" gap={0}>
              <Flex justify="center" align="center" h={70}>
                <Image
                  mb={20}
                  w={150}
                  src={job.logo}
                  alt={job.name + " logo"}
                />
              </Flex>
              <Title order={3}>{job.name}</Title>
              <Text>{job.title}</Text>
              <Badge variant="light" color="teal" m="md">
                {job.period.from} - {job.period.to}
              </Badge>
            </Stack>
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};
