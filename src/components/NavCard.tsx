import {
  Badge,
  Box,
  Card,
  Center,
  Flex,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";

interface NavCardProps {
  icon: JSX.Element;
  title: string;
  badge?: string;
}

export const NavCard = ({ icon, title, badge }: NavCardProps) => {
  const theme = useMantineTheme();

  return (
    <Card radius="md" bg={theme.colors.gray[1]} style={{ aspectRatio: "1/1" }}>
      {badge && (
        <Badge
          size="lg"
          radius="sm"
          color="gray"
          variant="light"
          pos="absolute"
          right={10}
          top={10}
        >
          {badge}
        </Badge>
      )}
      <Flex align="center" justify="center" h="100%">
        <Stack align="center" gap={0}>
          <Box>{icon}</Box>
          <Title
            fw={600}
            style={{ color: "rgb(60,60,60)" }}
            size="xs"
            order={2}
          >
            {title}
          </Title>
        </Stack>
      </Flex>
    </Card>
  );
};
