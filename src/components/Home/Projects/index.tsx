"use client";
import Link from "next/link";

import { useContext } from "react";
import { Box, Button, Text } from "@mantine/core";
import { Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

import ScrollFadeUp from "@/components/shared/scroll-fade-up";
import { ScrollContext } from "@/contexts/ScrollContext";
import useWindowSize from "@/hooks/use-window-size";
import classes from "@/styles/Button.module.css";

import ProjectList from "./ProjectList";

const Projects = () => {
  const { isMobile } = useWindowSize();
  const { targetRef, targetId } = useContext(ScrollContext);

  return (
    <ScrollFadeUp repeat>
      <Box
        id="projects"
        ref={targetId === "projects" ? targetRef : null}
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "",
          gap: "32px",
          padding: isMobile ? "32px 16px" : "32px",
          alignContent: "center",
          justifyContent: "space-between",
          backgroundColor: "rgb(247, 247, 247)",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "",
            gap: "8px",
            width: "max-content",
          }}
        >
          <Title>PROJECTS</Title>
          <Text size="md">A curated selection of my web projects.</Text>
          <Link href="/projects" style={{ textDecoration: "none" }}>
            <Button
              rightSection={<IconArrowRight size={20} />}
              className={classes["button-gradient"]}
              style={{
                display: isMobile ? "none" : "flex",
              }}
            >
              See all
            </Button>
          </Link>
        </Box>

        <ProjectList />
      </Box>
    </ScrollFadeUp>
  );
};

export default Projects;
