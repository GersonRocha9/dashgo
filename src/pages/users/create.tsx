import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import Head from "next/head"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import { RiDeleteBack2Line, RiSaveLine } from "react-icons/ri"
import * as yup from "yup"

import { Input } from "../../components/Form/Input"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"

interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  name: yup.string().required("Nome é obrigatório"),
  password: yup.string().required("Senha é obrigatória").min(6, "Senha deve ter no mínimo 6 caracteres"),
  password_confirmation: yup.string().oneOf([yup.ref("password"), null], "As senhas não conferem"),
});

export default function CreateUser() {
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <>
      <Head>
        <title>Criar usuário | dashgo.</title>
      </Head>

      <Box>
        <Header />
        <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
          <Sidebar />

          <Box as="form" flex={1} borderRadius={8} bg="gray.800" p={[6, 8]} onSubmit={handleSubmit(handleCreateUser)}>
            <Heading as="h2" size="lg" fontWeight="normal">
              Criar usuário
            </Heading>

            <Divider my={6} borderColor="gray.700" />

            <VStack spacing={8}>
              <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
                <Input name="name" label="Nome Completo" placeholder="Nome Completo" {...register("name")} />
                <Input name="email" label="E-mail" placeholder="E-mail" {...register("email")} />
                <Input name="password" label="Senha" placeholder="Senha" type="password" {...register("password")} />
                <Input
                  name="password_confirmation"
                  label="Digite a senha novamente"
                  placeholder="Digite a senha novamente"
                  type="password"
                  {...register("password")}
                />
              </SimpleGrid>
            </VStack>

            <Flex mt={8} justify={["center", "flex-end"]} align="center">
              <HStack spacing={4}>
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha" leftIcon={<Icon as={RiDeleteBack2Line} fontSize={20} />}>
                    Cancelar
                  </Button>
                </Link>
                <Button
                  colorScheme="pink"
                  leftIcon={<Icon as={RiSaveLine} fontSize={20} />}
                  isLoading={formState.isSubmitting}
                  type="submit"
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
