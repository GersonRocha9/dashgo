import { Avatar, Box, Button, Flex, Icon, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useContext } from 'react';
import { RiAddLine, RiLoginCircleLine } from 'react-icons/ri';

import { ProfileProps } from '../../@types/types';
import { AuthContext } from '../../contexts/AuthContext';

export function Profile({ showProfileData = true }: ProfileProps) {
  const { isAuthenticated, user } = useContext(AuthContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Flex align="center">
      {isAuthenticated && (
        <>
          <Box mr={4} textAlign="right">
            <Text>{user.nome}</Text>

            <Text fontSize="small" color="gray.300">
              {user.email}
            </Text>
          </Box>

          <Avatar size="md" mr={4} name={user.nome} />

          <Button colorScheme="red" variant="ghost" size="md" onClick={handleSignOut}>
            <Icon as={RiLoginCircleLine} mr={2} />
            Sair
          </Button>
        </>
      )}

      {!isAuthenticated && (
        <Flex>
          <NextLink href="/login" passHref>
            <Button
              as="a"
              colorScheme="purple"
              cursor="pointer"
              mr={4}
              leftIcon={<Icon as={RiLoginCircleLine} fontSize={20} />}
            >
              Entrar
            </Button>
          </NextLink>

          <NextLink href="/users/create" passHref>
            <Button as="a" colorScheme="green" cursor="pointer" mr={4} leftIcon={<Icon as={RiAddLine} fontSize={20} />}>
              Cadastrar
            </Button>
          </NextLink>
        </Flex>
      )}
    </Flex>
  );
}
