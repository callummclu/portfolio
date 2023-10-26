import {
  Anchor,
  Box,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Highlight,
  Overlay,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useRouter } from "next/router";
import { Ref, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { HiDownload, HiEye } from "react-icons/hi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

interface ResumeRef {
  posRef: Ref<any>;
  goBack: () => void;
}
type PDFFile = string | File | null;

export const Resume = ({ posRef, goBack }: ResumeRef) => {
  const [numPages, setNumPages] = useState<number>(1);
  const [overlay, setOverlay] = useState(false);
  const { push } = useRouter();

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <Container
      pos="relative"
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
        <Card
          p="xl"
          radius="sm"
          bg={overlay ? "dark.3" : "transparent"}
          style={overlay ? { outline: "4px solid #c4c4c4" } : {}}
        >
          <Box
            style={{ filter: "drop-shadow(0px 0px 5px rgba(50, 50, 0, 0.2))" }}
          >
            <Card
              pos="relative"
              style={{
                cursor: "pointer",
                clipPath: "polygon(68% 0, 100% 23.45%, 100% 100%, 0 100%, 0 0)",
              }}
              withBorder
              onMouseOver={() => setOverlay(true)}
              onMouseOut={() => setOverlay(false)}
            >
              <Card
                pos="absolute"
                w={100}
                h={100}
                right={0}
                radius={0}
                top={0}
                shadow="md"
                style={{ zIndex: 100 }}
                withBorder
              ></Card>
              {overlay && (
                <>
                  <Box
                    pos="absolute"
                    top="50%"
                    left="50%"
                    display="flex"
                    style={{
                      zIndex: 1000,
                      transform: "translate(-50%,-50%)",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      leftSection={<HiEye size={16} />}
                      color="teal.7"
                      radius="md"
                      onClick={() => push("/callum-mcluskey.pdf")}
                    >
                      View in browser
                    </Button>
                    <Button
                      component="a"
                      href="/callum-mcluskey.pdf"
                      download
                      mt="xl"
                      leftSection={<HiDownload size={16} />}
                      color="teal.7"
                      radius="md"
                    >
                      Download
                    </Button>
                  </Box>
                  <Overlay color="white" backgroundOpacity={0} blur={2} />
                </>
              )}
              <Document
                file="./callum-mcluskey.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    height={400}
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ))}
              </Document>
            </Card>
          </Box>
        </Card>

        <Text
          px={5}
          py={1}
          mt="xs"
          onMouseOver={() => setOverlay(true)}
          onMouseOut={() => setOverlay(false)}
          style={{ borderRadius: 5, fontSize: 18 }}
          bg={overlay ? "blue.4" : "white"}
          color={overlay ? "white" : "rgb(60,60,60)"}
          p={0}
          fw={500}
        >
          resume.pdf
        </Text>
      </Flex>
    </Container>
  );
};
