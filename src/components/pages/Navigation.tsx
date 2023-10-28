import {
  Badge,
  Center,
  Container,
  Text,
  CopyButton,
  Group,
  SimpleGrid,
  Stack,
  TextInput,
  em,
  Modal,
} from "@mantine/core";
import { useHotkeys, useMediaQuery } from "@mantine/hooks";
import { Ref, useEffect, useState } from "react";
import { NavCard } from "../NavCard";
import { BsPerson, BsSearch } from "react-icons/bs";
import { MdLaptop } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { HiOutlineDocument } from "react-icons/hi";
import Link from "next/link";
import { BiCopy, BiLink } from "react-icons/bi";

interface NavigationProps {
  scrollToAbout: () => void;
  scrollToExperience: () => void;
  scrollToProjects: () => void;
  scrollToResume: () => void;
  posRef: Ref<any>;
}

export const Navigation = ({
  scrollToAbout,
  scrollToExperience,
  scrollToProjects,
  scrollToResume,
  posRef,
}: NavigationProps) => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const [isMac, setIsMac] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useHotkeys([
    ["ctrl+K", () => setShowModal(!showModal)],
    ["mod+K", () => setShowModal(!showModal)],
  ]);
  useEffect(() => {
    setIsMac(
      typeof window !== "undefined"
        ? navigator.platform.toUpperCase().indexOf("MAC") >= 0
        : false
    );
  }, []);
  return (
    <>
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
      <Container
        ref={posRef}
        h="100vh"
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
              onClick={scrollToAbout}
              title="Education"
              icon={
                <BsPerson color="rgb(60,60,60)" size={isMobile ? 32 : 54} />
              }
            />
            <NavCard
              onClick={scrollToExperience}
              title="Experience"
              icon={
                <MdLaptop color="rgb(60,60,60)" size={isMobile ? 32 : 54} />
              }
            />
            <NavCard
              onClick={scrollToProjects}
              title="Projects"
              icon={
                <AiOutlineFundProjectionScreen
                  color="rgb(60,60,60)"
                  size={isMobile ? 32 : 54}
                />
              }
            />
            <NavCard
              onClick={scrollToResume}
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
            <Text ta="center" color="gray.6" fw={500} size="sm" mt="lg" mb="xs">
              Click a category or scroll down to view in order
            </Text>
          </Center>
          <Center>
            <Group justify="center">
              <Link href="https://www.github.com/callummclu/">
                <Badge
                  style={{ cursor: "pointer" }}
                  radius="sm"
                  color="gray"
                  variant="light"
                  rightSection={<BiLink />}
                >
                  Github
                </Badge>
              </Link>
              <Link href="https://www.linkedin.com/in/callummclu/">
                <Badge
                  style={{ cursor: "pointer" }}
                  radius="sm"
                  color="gray"
                  variant="light"
                  rightSection={<BiLink />}
                >
                  LinkedIn
                </Badge>
              </Link>
              <CopyButton value="callummcluskey100@gmail.com">
                {({ copied, copy }) => (
                  <Badge
                    style={{ cursor: "pointer" }}
                    radius="sm"
                    color="gray"
                    onClick={copy}
                    variant="light"
                    rightSection={<BiCopy />}
                  >
                    {copied ? "copied" : "Email"}
                  </Badge>
                )}
              </CopyButton>
              <CopyButton value="+447902768585">
                {({ copied, copy }) => (
                  <Badge
                    style={{ cursor: "pointer" }}
                    radius="sm"
                    color="gray"
                    onClick={copy}
                    variant="light"
                    rightSection={<BiCopy />}
                  >
                    {copied ? "copied" : "Phone"}
                  </Badge>
                )}
              </CopyButton>
            </Group>
          </Center>
        </Stack>
      </Container>
    </>
  );
};
