import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useContext, useRef } from "react";
import { RiBuildingLine, RiContactsLine } from "react-icons/ri";

import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  const { isAuthenticated } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const { data } = useQuery(["userInfo"], () => {
    return api.get("/profissional/1").then((response) => response.data);
  });

  return (
    <>
      <Stack spacing={12} align="flex-start">
        <NavSection title="MENU">
          {isAuthenticated && (
            <Button colorScheme="purple" onClick={onOpen}>
              Editar meus dados
            </Button>
          )}

          <NavLink icon={RiContactsLine} href="/users">
            Lista de Profissionais
          </NavLink>
          <NavLink icon={RiBuildingLine} href="/clinics">
            Lista de Clínicas Médicas
          </NavLink>
        </NavSection>
      </Stack>

      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="gray.900" borderRadius="lg" w="100%" maxW={800}>
          <ModalHeader>Edite seus dados</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome completo</FormLabel>
              <Input ref={initialRef} placeholder="Nome completo" value={data?.nome} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>E-mail</FormLabel>
              <Input ref={initialRef} placeholder="Nome completo" value={data?.email} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>CPF</FormLabel>
              <Input ref={initialRef} placeholder="CPF" value={data?.cpf} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>CRM</FormLabel>
              <Input ref={initialRef} placeholder="CRM" value={data?.crm} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Telefone</FormLabel>
              <Input ref={initialRef} placeholder="Telefone" value={data?.telefone} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" onClick={onClose} mr={3}>
              Cancelar
            </Button>

            <Button colorScheme="green">Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
