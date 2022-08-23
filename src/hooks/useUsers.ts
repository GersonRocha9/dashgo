import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../helpers/getUsers";

export function useUsers() {
  return useQuery(["users"], getUsers, { staleTime: 1000 * 5 });
}
