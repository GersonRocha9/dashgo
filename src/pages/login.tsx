import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { Input } from "../components/Form/Input";

interface signInFormData {
  login: string;
  password: string;
}

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required(),
});

export default function SignIn() {
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn: SubmitHandler<signInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
  };

  return (
    <>
      <Head>
        <title>Home | dashgo.</title>
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
            <Input name="password" label="Password" type="password" placeholder="Senha" {...register("password")} />
          </Stack>

          <Button type="submit" mt={4} colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
