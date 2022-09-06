import { api } from "../services/api";

type User = {
  id: string;
  nome: string;
  crm: string;
  cpf: string;
  telefone: string;
  email: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("/profissional-busca/", {
    params: { page },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user: User) => {
    return {
      id: user.id,
      nome: user.nome,
      crm: user.crm,
      cpf: user.cpf,
      telefone: user.telefone,
      email: user.email,
    };
  });

  return {
    users,
    totalCount,
  };
}
