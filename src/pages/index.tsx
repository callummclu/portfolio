import Head from "next/head";
import { BsPerson, BsSearch } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdLaptop } from "react-icons/md";
import { HiOutlineDocument } from "react-icons/hi";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Text,
  Container,
  Flex,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
  em,
  Center,
  Group,
  Badge,
  Kbd,
  Modal,
} from "@mantine/core";
import { NavCard } from "@/components/NavCard";
import { useHotkeys, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const isMac =
    typeof window !== "undefined"
      ? navigator.platform.toUpperCase().indexOf("MAC") >= 0
      : false;
  const [showModal, setShowModal] = useState(false);

  useHotkeys([
    ["ctrl+K", () => setShowModal(!showModal)],
    ["mod+K", () => setShowModal(!showModal)],
  ]);

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
      <Modal
        opened={showModal}
        p={0}
        withCloseButton={false}
        onClose={() => setShowModal(false)}
      >
        <TextInput leftSection={<BsSearch />} />
        <Center>
          <Text color="gray.6" fw={500} size="sm" mt="xl" mb="md">
            This functionality is coming soon
          </Text>
        </Center>
      </Modal>
      <div dir="ltr" className={`${styles.main} ${inter.className}`}>
        <Flex
          style={{ scrollSnapAlign: "start" }}
          h="100svh"
          align="center"
          justify="center"
        >
          <Title className={`${styles.title}`} fw={600}>
            👋 I&apos;m Callum
            <br /> A Software Engineer
          </Title>
        </Flex>
        <Container
          h="100svh"
          style={{
            scrollSnapAlign: "start",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Stack w="100%" mx="md">
            <TextInput
              onClick={() => setShowModal(true)}
              onFocus={(e) => e.target.blur()}
              rightSectionWidth={isMac ? 80 : 100}
              rightSection={
                !isMobile && (
                  <Badge radius="sm" color="gray" variant="light">
                    {isMac ? "⌘ + K" : "Ctrl + K"}
                  </Badge>
                )
              }
              radius="md"
              placeholder="Search for information"
              size="lg"
              variant="filled"
            />
            <SimpleGrid cols={{ base: 2, xs: 4, sm: 4, md: 4 }}>
              <NavCard
                title="About Me"
                icon={
                  <BsPerson color="rgb(60,60,60)" size={isMobile ? 32 : 54} />
                }
              />
              <NavCard
                title="Experience"
                icon={
                  <MdLaptop color="rgb(60,60,60)" size={isMobile ? 32 : 54} />
                }
              />
              <NavCard
                title="Projects"
                icon={
                  <AiOutlineFundProjectionScreen
                    color="rgb(60,60,60)"
                    size={isMobile ? 32 : 54}
                  />
                }
              />
              <NavCard
                badge="23-10-23"
                title="Resume"
                icon={
                  <HiOutlineDocument
                    color="rgb(60,60,60)"
                    size={isMobile ? 32 : 54}
                  />
                }
              />
            </SimpleGrid>
            <Center>
              <Text color="gray.6" fw={500} size="sm" mt="xl">
                Click a category or scroll down to view in order
              </Text>
            </Center>
            <Center>
              <Group>
                <Badge radius="sm" color="gray" variant="light">
                  Github
                </Badge>
                <Badge radius="sm" color="gray" variant="light">
                  LinkedIn
                </Badge>
                <Badge radius="sm" color="gray" variant="light">
                  Email
                </Badge>
                <Badge radius="sm" color="gray" variant="light">
                  Phone
                </Badge>
              </Group>
            </Center>
          </Stack>
        </Container>
      </div>
    </>
  );
}
