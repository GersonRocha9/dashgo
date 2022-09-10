import { InputProps as ChakraInputProps, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { LinkProps } from 'next/link';
import { ElementType, ReactElement, ReactNode } from 'react';

export interface User {
  login: string;
  nome: string;
  email: string;
  idUsuario: number;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface SignInCredentials {
  login: string;
  senha: string;
}

export interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User;
}

export interface SidebarDrawerProviderProps {
  children: ReactNode;
}

export interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export interface ProfileProps {
  showProfileData: boolean;
}

export interface SearchBoxProps {
  showProfileData: boolean;
}

export interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export interface UserHook {
  id: string;
  nome: string;
  crm: string;
  cpf: string;
  telefone: string;
  email: string;
}

export interface GetUsersResponse {
  totalCount: number;
  users: User[];
}

export interface CreateUserFormData {
  nome: string;
  cpf: string;
  crm: string;
  email: string;
  login: string;
  status: string;
  senha: string;
  telefone: string;
}

export interface signInFormData {
  login: string;
  senha: string;
}
