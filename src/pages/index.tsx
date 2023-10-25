import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Banner } from "@/components/pages/Banner";
import { Navigation } from "@/components/pages/Navigation";
import { About } from "@/components/pages/About";
import { Experience } from "@/components/pages/Experience";
import { Projects } from "@/components/pages/Projects";
import { Resume } from "@/components/pages/Resume";
import { useRef } from "react";
import { useScrollIntoView } from "@mantine/hooks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { scrollIntoView: scrollToNav, targetRef: navRef } =
    useScrollIntoView<any>({
      duration: 0,
    });
  const { scrollIntoView: scrollToAbout, targetRef: aboutRef } =
    useScrollIntoView<any>({
      duration: 0,
    });
  const { scrollIntoView: scrollToExperience, targetRef: experienceRef } =
    useScrollIntoView<any>({
      duration: 0,
    });
  const { scrollIntoView: scrollToProjects, targetRef: projectsRef } =
    useScrollIntoView<any>({
      duration: 0,
    });
  const { scrollIntoView: scrollToResume, targetRef: resumeRef } =
    useScrollIntoView<any>({
      duration: 0,
    });

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
      <div dir="ltr" className={`${styles.main} ${inter.className}`}>
        <Banner />
        <Navigation
          posRef={navRef}
          {...{
            scrollToAbout,
            scrollToExperience,
            scrollToProjects,
            scrollToResume,
          }}
        />
        <About goBack={scrollToNav} posRef={aboutRef} />
        <Experience goBack={scrollToNav} posRef={experienceRef} />
        <Projects goBack={scrollToNav} posRef={projectsRef} />
        <Resume goBack={scrollToNav} posRef={resumeRef} />
      </div>
    </>
  );
}
