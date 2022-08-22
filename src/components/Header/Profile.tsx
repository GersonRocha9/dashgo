import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr={4} textAlign="right">
        <Text>Gerson Rocha</Text>

        <Text fontSize="small" color="gray.300">
          gersonrocha9@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Gerson Rocha" src="https://github.com/GersonRocha9.png" />
    </Flex>
  );
}
