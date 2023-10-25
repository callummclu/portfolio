import {
  Anchor,
  Button,
  Card,
  Center,
  Container,
  Flex,
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
      <Title order={3} size={50} pos="absolute" top={25}>
        Resume
      </Title>
      <Flex
        direction="column"
        h="100%"
        w="100%"
        align="center"
        justify="center"
      >
        <SimpleGrid cols={{ base: 1, xs: 2 }}>
          <Card
            pos="relative"
            style={{ cursor: "pointer" }}
            withBorder
            onMouseOver={() => setOverlay(true)}
            onMouseOut={() => setOverlay(false)}
          >
            {}
            {overlay && (
              <>
                <Button
                  pos="absolute"
                  top="50%"
                  left="50%"
                  leftSection={<HiEye size={16} />}
                  color="teal.7"
                  radius="md"
                  onClick={() => push("/callum-mcluskey.pdf")}
                  style={{ zIndex: 1000, transform: "translate(-50%,-50%)" }}
                >
                  View in browser
                </Button>
                <Overlay color="#000" backgroundOpacity={0.25} blur={2} />
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
          <Flex align="center" justify="center" direction="column">
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
          </Flex>
        </SimpleGrid>
      </Flex>
    </Container>
  );
};
