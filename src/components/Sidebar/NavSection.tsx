import { Box, Stack, Text } from '@chakra-ui/react';

import { NavSectionProps } from '../../@types/types';

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="sm">
        {title}
      </Text>

      <Stack spacing={4} mt={8} align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
