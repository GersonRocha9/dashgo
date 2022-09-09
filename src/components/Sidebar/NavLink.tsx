import { Icon, Link as ChakraLink, Text } from '@chakra-ui/react';

import { NavLinkProps } from '../../types/types';
import { ActiveLink } from '../ActiveLink';

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize={20} />
        <Text ml={4} fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
