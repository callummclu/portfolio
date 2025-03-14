import { experience } from "@/constants/experience";
import {
  ActionIcon,
  Avatar,
  Badge,
  Flex,
  Text,
  Timeline,
  TimelineItem,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { BiCollapseVertical, BiExpandVertical } from "react-icons/bi";

export const Experience = () => {
  const { width } = useViewportSize();

  const [visibleExperience, setVisibleExperience] = useState(
    width > 744 ? [experience.at(-1)] : experience
  );

  useEffect(() => {
    if (width > 744) {
      setVisibleExperience([experience.at(-1)]);
    } else {
      setVisibleExperience(experience);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

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

      <ActionIcon
        style={{
          opacity: width > 744 ? 1 : 0,
        }}
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
    </Flex>
  );
};
