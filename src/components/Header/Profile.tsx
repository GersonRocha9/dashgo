import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Gerson Rocha</Text>

          <Text fontSize="small" color="gray.300">
            gersonrocha9@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Gerson Rocha" src="https://github.com/GersonRocha9.png" />
    </Flex>
  );
}
