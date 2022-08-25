import { Avatar, Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiAddLine, RiLoginCircleLine } from "react-icons/ri";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const isLoggedIn = false;

  return (
    <Flex align="center">
      {isLoggedIn && (
        <>
          <Box mr={4} textAlign="right">
            <Text>Gerson Rocha</Text>

            <Text fontSize="small" color="gray.300">
              gersonrocha9@gmail.com
            </Text>
          </Box>

          <Avatar size="md" name="Gerson Rocha" src="https://github.com/GersonRocha9.png" />
        </>
      )}

      {!isLoggedIn && (
        <Flex>
          <NextLink href="/login" passHref>
            <Button
              as="a"
              colorScheme="blue"
              cursor="pointer"
              mr={4}
              leftIcon={<Icon as={RiLoginCircleLine} fontSize={20} />}
            >
              {showProfileData ? "Entrar" : ""}
            </Button>
          </NextLink>

          <NextLink href="/users/create" passHref>
            <Button as="a" colorScheme="pink" cursor="pointer" leftIcon={<Icon as={RiAddLine} fontSize={20} />}>
              {showProfileData ? "Cadastrar" : ""}
            </Button>
          </NextLink>
        </Flex>
      )}
    </Flex>
  );
}
