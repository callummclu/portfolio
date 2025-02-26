import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
  Timeline,
  TimelineItem,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { Ref, useEffect, useState } from "react";
import { BiCollapseVertical, BiExpandVertical } from "react-icons/bi";

export const Experience = () => {
  const { width } = useViewportSize();

  const experience = [
    {
      logo: "/evata-logo.png",
      name: "Evata",
      title: "Full Stack Engineer",
      period: {
        from: "Mar 22",
        to: "Jun 22",
      },
    },
    {
      logo: "/guitarguitar-logo.png",
      name: "guitarguitar",
      title: "Software Engineer",
      period: {
        from: "Jun 22",
        to: "Feb 24",
      },
    },
    {
      logo: "/jpmorgan-logo.png",
      name: "JPMorganChase",
      title: "Software Engineer",
      period: {
        from: "Feb 24",
        to: "Mar 25",
      },
    },
    {
      logo: "/skyscanner-logo.png",
      name: "Skyscanner",
      title: "Software Engineer 2",
      period: {
        from: "Mar 25",
        to: "Present",
      },
    },
  ];

  const [visibleExperience, setVisibleExperience] = useState(
    width > 783 ? [experience.at(-1)] : experience
  );

  useEffect(() => {
    if (width <= 783) {
      setVisibleExperience(experience);
    } else {
      setVisibleExperience([experience.at(-1)]);
    }
  }, [experience, width]);

  return (
    <Flex align="center" justify="center" gap="xs">
      <Timeline bulletSize={20} lineWidth={2}>
        {visibleExperience.map((job, index) => (
          <TimelineItem
            key={job?.name}
            title={job?.name}
            bullet={
              <Avatar
                size="sm"
                src={job?.logo}
                radius="xl"
                alt={`${job?.name} logo`}
              />
            }
          >
            <Text size="sm" p={0} m={0}>
              {job?.title}
            </Text>
            <Badge
              variant={
                visibleExperience.length == 1
                  ? "outline"
                  : index == experience.length - 1
                  ? "outline"
                  : "light"
              }
              size="sm"
              color="gray"
            >
              {job?.period.from} - {job?.period.to}
            </Badge>{" "}
          </TimelineItem>
        ))}
      </Timeline>
      {width > 783 && (
        <ActionIcon
          onClick={() => {
            if (visibleExperience.length == 1) {
              setVisibleExperience(experience);
            } else {
              setVisibleExperience([experience.at(-1)]);
            }
          }}
          variant="subtle"
        >
          {visibleExperience.length == 1 ? (
            <BiExpandVertical />
          ) : (
            <BiCollapseVertical />
          )}
        </ActionIcon>
      )}
    </Flex>
  );
};
