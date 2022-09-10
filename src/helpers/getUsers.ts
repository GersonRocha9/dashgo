import { GetUsersResponse, UserHook } from '../@types/types';
import { api } from '../services/api';

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("/profissional-busca/", {
    params: { page },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user: UserHook) => {
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
