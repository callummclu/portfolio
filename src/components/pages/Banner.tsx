import {
  Flex,
  Text,
  Title,
  Stack,
  Button,
  Center,
  Group,
  Badge,
  CopyButton,
} from "@mantine/core";
import styles from "@/styles/Home.module.css";
import { Experience } from "./Experience";
import Link from "next/link";
import { BiCopy, BiFile, BiLink } from "react-icons/bi";
import { useViewportSize } from "@mantine/hooks";

export const Banner = () => {
  const { width } = useViewportSize();
  return (
    <Flex
      h={width > 783 ? "100vh" : "auto"}
      align="center"
      justify="center"
      p="xl"
      wrap="wrap"
      gap={75}
      mt={width > 783 ? 0 : "xl"}
    >
      <Stack gap="0" miw={300} maw={400}>
        <Text className={styles.bannerheadtext} fw="700" size="sm" c="gray">
          SOFTWARE ENGINEER
        </Text>
        <Title className={`${styles.title}`} fw={600}>
          Callum McLuskey
        </Title>
        <Text className={`${styles.subtext}`}>
          3 years of experience in software development in areas such as
          e-commerce & financial tech
        </Text>
        <Group mt="sm">
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

          <Link href="https://www.callummclu.co.uk/callum-mcluskey.pdf">
            <Badge
              style={{ cursor: "pointer" }}
              radius="sm"
              color="gray"
              variant="light"
              rightSection={<BiFile />}
            >
              Resume
            </Badge>
          </Link>
        </Group>
      </Stack>
      <Experience />
    </Flex>
  );
};
