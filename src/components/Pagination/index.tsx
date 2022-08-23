import { Box, HStack, Stack, Text } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);

  const siblingsCount = 1;

  function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, index) => from + index + 1).filter((page) => page > 0);
  }

  const previousPage = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];

  const nextPage =
    currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : [];

  return (
    <Stack direction={["column", "row"]} mt={8} justify="space-between" align="center" spacing={6}>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing={2}>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" w={8} textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return <PaginationItem key={page} number={page} onPageChange={onPageChange} />;
          })}

        <PaginationItem isCurrent number={currentPage} onPageChange={onPageChange} />

        {nextPage.length > 0 &&
          nextPage.map((page) => {
            return <PaginationItem key={page} number={page} onPageChange={onPageChange} />;
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" w={8} textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </HStack>
    </Stack>
  );
}
