import Image from "next/image";

import { Box, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";

import useWindowSize from "@/hooks/use-window-size";

import { ProjectCardProps } from "../constants/project.constant";

const ProjectCard = ({
  project,
  opacity,
}: {
  opacity: string;
  project: ProjectCardProps;
}) => {
  const { isMobile } = useWindowSize();
  const { ref, hovered } = useHover();

  return (
    <Box
      ref={ref}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        padding: "12px",
        gap: "20px",
        opacity: opacity,
        transition: "opacity 0.3s ease-in-out, scale 0.3s ease-in-out",
        // border: '1px solid #e5e5e5',
        borderRadius: "8px",
        backgroundColor: "white",
        minHeight: "195px",
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px -1px rgba(0, 0, 0, .1)",
      }}
    >
      <Image
        src={project.image}
        alt="project"
        style={{
          minWidth: isMobile ? 100 : 400,
          maxHeight: "195px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          {project.title}
        </Text>
        <Box style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {project.techList.map((tech) => {
            return (
              <Text
                key={tech}
                style={{
                  padding: "2px 8px",
                  borderRadius: "999px",
                  border: "1px solid #e5e5e5",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {tech}
              </Text>
            );
          })}
        </Box>
        <Text style={{ fontSize: "14px", height: "100%" }}>
          {project.description}
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectCard;
