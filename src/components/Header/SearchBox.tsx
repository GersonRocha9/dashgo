import { Flex, Icon, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

import { SearchBoxProps } from '../../types/types';

export function SearchBox({ showProfileData = true }: SearchBoxProps) {
  const [search, setSearch] = useState("");

  return (
    <>
      {showProfileData && (
        <Flex
          as="label"
          flex={1}
          py={4}
          px={8}
          mx={6}
          maxW={500}
          alignSelf="center"
          color="gray.200"
          position="relative"
          bg="gray.800"
          borderRadius="full"
        >
          <Input
            name="search"
            placeholder="Buscar na plataforma"
            color="gray.50"
            px={4}
            mr={4}
            variant="unstyled"
            _placeholder={{ color: "gray.400" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Icon as={RiSearchLine} fontSize={20} />
        </Flex>
      )}
    </>
  );
}
