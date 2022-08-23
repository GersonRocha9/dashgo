import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../helpers/getUsers";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export function useUsers() {
  return useQuery<User[]>(["users"], getUsers, { staleTime: 1000 * 5 });
}
