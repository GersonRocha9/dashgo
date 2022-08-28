import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { Input } from "../components/Form/Input";
import { AuthContext } from "../contexts/AuthContext";

interface signInFormData {
  login: string;
  senha: string;
}

const schema = yup.object().shape({
  login: yup.string().required(),
  senha: yup.string().required(),
});

export default function SignIn() {
  const { isAuthenticated, signIn } = useContext(AuthContext);

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn: SubmitHandler<signInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await signIn(data);
    reset();
  };

  return (
    <>
      <Head>
        <title>Login | dashgo.</title>
      </Head>

      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxW={400}
          bg="gray.800"
          borderRadius={8}
          p={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={8}>
            Login
          </Text>

          <Stack spacing={4}>
            <Input name="login" label="Login" type="login" placeholder="Login" {...register("login")} />
            <Input name="senha" label="Senha" type="password" placeholder="Senha" {...register("senha")} />
          </Stack>

          <Button type="submit" mt={4} colorScheme="green" size="lg" isLoading={formState.isSubmitting}>
            Entrar
          </Button>

          <Stack mt={4}>
            <Text fontSize="sm" color="gray.500" textAlign="center" mt={4}>
              Não tem conta? <Link href="/users/create">Cadastre-se</Link>
            </Text>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
