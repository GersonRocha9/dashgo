import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxW={400} bg="gray.800" borderRadius={8} p={8} flexDir="column">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
          Login
        </Text>
        <Stack spacing={4}>
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Password" type="password" />
        </Stack>
        <Button type="submit" mt={4} colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
