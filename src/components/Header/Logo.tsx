import { Box, Icon, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { RiMentalHealthLine } from "react-icons/ri";

export function Logo() {
  return (
    <NextLink href="/" passHref>
      <Box as="a" display="flex" alignItems="center" justifyContent="center" href="/" cursor="pointer">
        <Icon as={RiMentalHealthLine} color="pink.500" mr={1} fontSize={30} />
        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" letterSpacing="tight" w={64}>
          find.
          <Text as="span" color="pink.500">
            health.
          </Text>
        </Text>
      </Box>
    </NextLink>
  );
}
