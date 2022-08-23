import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../helpers/getUsers";

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), { staleTime: 1000 * 5 });
}
