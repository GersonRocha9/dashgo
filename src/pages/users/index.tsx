import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { RiAddLine, RiDeleteBin5Line, RiPencilLine, RiRefreshLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../hooks/useUsers";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isError, refetch } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Usuários | dashgo.</title>
      </Head>

      <Box>
        <Header />
        <Flex w="100%" my={6} maxW={1480} mx="auto" px={[4, 4, 6]}>
          <Sidebar />

          <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
            <Flex mb={8} justify="space-between" align="center">
              <Heading as="h2" size="lg" fontWeight="normal">
                Usuários
                {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml={4} />}
              </Heading>

              <Box>
                <Button
                  as="a"
                  colorScheme="blue"
                  size="sm"
                  fontSize="sm"
                  mr={4}
                  cursor="pointer"
                  leftIcon={<Icon as={RiRefreshLine} fontSize={20} />}
                  onClick={() => refetch()}
                >
                  Atualizar dados
                </Button>

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
              </Box>
            </Flex>

            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : isError ? (
              <Flex justify="center">
                <Text>Falha ao obter dados do usuário</Text>
              </Flex>
            ) : (
              <>
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
                    {data.users
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((user) => {
                        return (
                          <Tr key={user.id}>
                            <Td px={[4, 4, 6]}>
                              <Checkbox colorScheme="pink" />
                            </Td>

                            <Td>
                              <Box>
                                <Text fontWeight="bold">{user.name}</Text>
                                <Text fontSize="sm" color="gray.300">
                                  {user.email}
                                </Text>
                              </Box>
                            </Td>

                            {isWideVersion && <Td>{user.createdAt}</Td>}

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
                        );
                      })}
                  </Tbody>
                </Table>

                <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} onPageChange={setPage} />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
