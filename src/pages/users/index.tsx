import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiDeleteBin5Line, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";

import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxW={1480} mx="auto" px={[4, 4, 6]}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading as="h2" size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                colorScheme="pink"
                size="sm"
                fontSize="sm"
                cursor="pointer"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={[4, 4, 6]} color="gray.300" w={8}>
                  <Checkbox colorScheme="pink" />
                </Th>

                <Th>Usuário</Th>

                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w={8}>{/* Th referente ao editar */}</Th>
                <Th w={8}>{/* Th referente ao deletar */}</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={[4, 4, 6]}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Cristina Rocha</Text>
                    <Text fontSize="sm" color="gray.300">
                      crisrocha@gmail.com
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>25 de Agosto de 2022</Td>}

                <Td>
                  <Button
                    as="a"
                    colorScheme="blue"
                    size="sm"
                    fontSize="sm"
                    cursor="pointer"
                    leftIcon={<Icon as={RiPencilLine} fontSize={20} />}
                  >
                    {isWideVersion ? "Editar" : ""}
                  </Button>
                </Td>

                <Td>
                  <Button
                    as="a"
                    colorScheme="red"
                    size="sm"
                    fontSize="sm"
                    cursor="pointer"
                    leftIcon={<Icon as={RiDeleteBin5Line} fontSize={20} />}
                  >
                    {isWideVersion ? "Deletar" : ""}
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={[4, 4, 6]}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Gerson Rocha</Text>
                    <Text fontSize="sm" color="gray.300">
                      gersonrocha9@gmail.com
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>22 de Agosto de 2022</Td>}

                <Td>
                  <Button
                    as="a"
                    colorScheme="blue"
                    size="sm"
                    fontSize="sm"
                    cursor="pointer"
                    leftIcon={<Icon as={RiPencilLine} fontSize={20} />}
                  >
                    {isWideVersion ? "Editar" : ""}
                  </Button>
                </Td>

                <Td>
                  <Button
                    as="a"
                    colorScheme="red"
                    size="sm"
                    fontSize="sm"
                    cursor="pointer"
                    leftIcon={<Icon as={RiDeleteBin5Line} fontSize={20} />}
                  >
                    {isWideVersion ? "Deletar" : ""}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
