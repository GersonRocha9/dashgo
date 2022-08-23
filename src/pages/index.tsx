import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface signInFormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

export default function SignIn() {
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn: SubmitHandler<signInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
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
            <Input name="email" label="E-mail" type="email" placeholder="E-mail" {...register("email")} />
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
