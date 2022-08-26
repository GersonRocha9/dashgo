import { Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { RiBuildingLine, RiContactsLine, RiEditLine } from "react-icons/ri";

import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Stack spacing={12} align="flex-start">
      <NavSection title="MENU">
        {isAuthenticated && (
          <NavLink icon={RiEditLine} href="/users/edit">
            Editar meus dados
          </NavLink>
        )}

        <NavLink icon={RiContactsLine} href="/users">
          Lista de Profissionais
        </NavLink>
        <NavLink icon={RiBuildingLine} href="/clinics">
          Lista de Clínicas Médicas
        </NavLink>
      </NavSection>
    </Stack>
  );
}
