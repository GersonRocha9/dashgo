import { Box, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export default function CreateClinic() {
  return (
    <>
      <Head>
        <title>Criar usuário | dashgo.</title>
      </Head>

      <Box>
        <Header />
        <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
          <Sidebar />

          <Box as="form" flex={1} borderRadius={8} bg="gray.800" p={[6, 8]}>
            <Heading size="md" fontWeight="normal">
              Se cadastre em nossa plataforme e fique visível para todos!
            </Heading>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
