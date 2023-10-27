import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@mantine/core/styles.css";
import { ImArrowUp2, ImArrowDown2 } from "react-icons/im";
import {
  ActionIcon,
  Affix,
  Button,
  MantineProvider,
  Progress,
  Stack,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scroll, scrollTo] = useWindowScroll();

  useEffect(() => {
    setScrollProgress(
      (scroll.y / (document.body.scrollHeight - window.innerHeight)) * 100
    );
  }, [scroll]);

  return (
    <MantineProvider>
      <Affix bottom={0} left={0}>
        <Progress
          color="teal"
          size="xs"
          styles={{
            root: { background: "transparent" },
            section: { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
          }}
          w="100%"
          value={scrollProgress}
          radius={0}
        />
      </Affix>
      <Affix right={10} bottom={10}>
        <Stack gap="xs">
          <ActionIcon
            size="lg"
            radius="md"
            variant="light"
            color="teal"
            disabled={scroll.y == 0}
            onClick={() =>
              scrollTo({ x: scroll.x, y: scroll.y - window.innerHeight })
            }
          >
            <ImArrowUp2 />
          </ActionIcon>
          <ActionIcon
            size="lg"
            radius="md"
            variant="light"
            color="teal"
            disabled={scrollProgress == 100}
            onClick={() =>
              scrollTo({ x: scroll.x, y: scroll.y + window.innerHeight })
            }
          >
            <ImArrowDown2 />
          </ActionIcon>
        </Stack>
      </Affix>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
