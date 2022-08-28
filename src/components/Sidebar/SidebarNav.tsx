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
import { useContext, useRef } from "react";
import { RiBuildingLine, RiContactsLine } from "react-icons/ri";

import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

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
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
              {/* value={user.login} */}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3}>
              Salvar
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
