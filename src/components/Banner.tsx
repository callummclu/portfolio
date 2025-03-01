import { Text, Title, Stack, Group, Badge, CopyButton } from "@mantine/core";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { BiCopy, BiFile, BiLink } from "react-icons/bi";
import { timeSinceStarted } from "@/helpers/yearsSinceStartedHelper";

export const Banner = () => (
  <Stack gap="0" miw={300} maw={400}>
    <Text className={styles.bannerheadtext} fw="700" size="sm" c="gray">
      SOFTWARE ENGINEER
    </Text>
    <Title className={`${styles.title}`} fw={600}>
      Callum McLuskey
    </Title>
    <Text className={`${styles.subtext}`}>
      {timeSinceStarted()} years of experience in software development in areas
      such as e-commerce & financial tech
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
      <CopyButton value="callummcluskey100@gmail.com">
        {({ copied, copy }) => (
          <Badge
            mb={-2.5}
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
    </Group>
  </Stack>
);
