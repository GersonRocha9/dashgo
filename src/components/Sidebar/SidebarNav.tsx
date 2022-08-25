import { Stack } from "@chakra-ui/react";
import { RiBuildingLine, RiContactsLine, RiEditLine } from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  const isLoggedIn = false;
  return (
    <Stack spacing={12} align="flex-start">
      <NavSection title="MENU">
        {isLoggedIn && (
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
