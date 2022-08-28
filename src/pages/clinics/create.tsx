import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiDeleteBack2Line, RiSaveLine } from "react-icons/ri";
import * as yup from "yup";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  crm: yup.string().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email().required(),
  login: yup.string().min(5, "Login deve ter no mínimo 5 caracteres").required(),
  password: yup.string().required().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export default function CreateUser() {
  const router = useRouter();

  const CreateUser = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post("/users", {
        user: {
          ...user,
          created_at: new Date(),
        },
      });
      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
      },
    }
  );

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await CreateUser.mutateAsync(data);
    router.push("/users");
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
            <Heading size="md" fontWeight="normal">
              Cadastre sua clínica aqui!
            </Heading>

            <Divider my={6} borderColor="gray.700" />

            <VStack spacing={8}>
              <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
                <Input name="name" label="Nome Completo" {...register("name")} />
                <Input name="crm" label="CRM" {...register("crm")} />
                <Input name="cpf" label="CPF" {...register("cpf")} />
                <Input name="phone" label="Telefone" {...register("phone")} />
                <Input name="email" label="E-mail" {...register("email")} />
                <Input name="login" label="Login" {...register("login")} />
                <Input name="password" label="Senha" type="password" {...register("password")} />
              </SimpleGrid>
            </VStack>

            <Flex mt={8} justify={["center", "flex-end"]} align="center">
              <HStack spacing={4}>
                <Link href="/users" passHref>
                  <Button colorScheme="red" leftIcon={<Icon as={RiDeleteBack2Line} fontSize={20} />}>
                    Cancelar
                  </Button>
                </Link>
                <Button
                  colorScheme="green"
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
