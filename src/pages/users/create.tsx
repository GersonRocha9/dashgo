import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { RiDeleteBack2Line, RiSaveLine } from "react-icons/ri";

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bg="gray.800" p={[6, 8]}>
          <Heading as="h2" size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my={6} borderColor="gray.700" />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input name="name" label="Nome Completo" placeholder="Nome Completo" />
              <Input name="email" label="E-mail" placeholder="E-mail" />
              <Input name="password" label="Senha" placeholder="Senha" />
              <Input
                name="password_confirmation"
                label="Digite a senha novamente"
                placeholder="Digite a senha novamente"
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
              <Button colorScheme="pink" leftIcon={<Icon as={RiSaveLine} fontSize={20} />}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
